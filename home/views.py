from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from twelvedata import TDClient
import requests
import numpy as np
import pandas as pd
import pandas_datareader as data
import datetime
from keras.models import load_model
from sklearn.preprocessing import MinMaxScaler

td = TDClient(apikey="d96500d09e2c454baf996a66ebc8a5ce")

# Class that render index page
class indexPage(View):
    template_name = 'home/index.html'

    def get(self, request):
        return render(request, self.template_name)

# Class to return timeseries data for graph
class tsData(View):

    def get(self, request):
        symbol = request.GET.get("symbol")
        interval = request.GET.get("interval")
        outputsize = request.GET.get("outputsize")
        
        # Fetching data to draw graph
        ts = td.time_series(
            symbol=symbol,
            interval=interval,
            outputsize=outputsize,
        ).as_json()

        # Fetching data to find moving avg
        maData = td.time_series(
            symbol=symbol,
            interval="1day",
            outputsize="200"
        ).as_json()

        # List to store data
        xLabel = []
        yLabel = []

        # Variable to store Moving Average
        sma30 = self.findSimpleMovingAve(30,data = [dt["close"] for dt in maData])
        sma50 = self.findSimpleMovingAve(50,data = [dt["close"] for dt in maData])
        sma150 = self.findSimpleMovingAve(150,data = [dt["close"] for dt in maData])
        sma200 = self.findSimpleMovingAve(200,data = [dt["close"] for dt in maData])

        # Set data as xLabel and yLabel
        # Data in ts is in desending order
        for data in ts:
            xLabel.append(data["datetime"])
            yLabel.append(data["close"])
        
        # Reverse the list to make data appropriate
        xLabel.reverse()
        yLabel.reverse()

        # Get the stock summary data
        url = "https://api.twelvedata.com/stocks?symbol=" + symbol + "&apikey=d96500d09e2c454baf996a66ebc8a5ce"
        response = requests.get(url).json()['data']

        # Object to return as JSON response
        response = {
            "xLabel":xLabel,
            "yLabel":yLabel,
            "sma30": sma30,
            "sma50": sma50,
            "sma150": sma150,
            "sma200":sma200,
            "stockName":response[0]['name'],
            "stockSymbol":response[0]['symbol'],
            "stockExchange":response[0]['exchange'],
        }

        return JsonResponse(response)
        
    # Method to find simple moving average
    def findSimpleMovingAve(self, time, data):
        data.reverse()
        sum = 0
        for i in range(time):
            if i < len(data):
                sum += float(data[i])
        
        return (round((sum / time), 3))

# Class to return Predicted Future Data
class futureData(View):
    def get(self, request):
        # Getting list of next 30 days date
        current_date = datetime.date.today()
        futureDate = [(current_date + datetime.timedelta(days=i)).strftime('%Y-%m-%d') for i in range(0, 30)]

        # Start and end date to get stock data
        start = datetime.datetime(2000, 1, 1)
        end = datetime.datetime(2022, 12, 31)
        
        # getting symbol name from the parameter
        symbol = symbol = request.GET.get("symbol")
        # Getting data stock data
        df = data.DataReader(symbol , 'stooq', start, end)['Close'].tolist()
        df = pd.DataFrame(df[: 30])

        scaler = MinMaxScaler(feature_range=(0,1))
        inputDf = scaler.fit_transform(df)
        import pdb
        pdb.set_trace()

        # # Make training data
        # data_training = pd.DataFrame(df['Close'][0:int(len(df) * 0.70)])
        # data_testing = pd.DataFrame(df['Close'][int(len(df)*0.70) : int(len(df))])

        # scaler = MinMaxScaler(feature_range=(0,1))

        # # Converting the data into the array
        # data_training_array = scaler.fit_transform(data_training)

        # # Loading the model
        # model = load_model('predictFutureStock.h5')

        # # Testing the model
        # past_100_days = data_training.tail(100)
        # final_df = past_100_days.append(data_testing, ignore_index = True)
        # input_data = scaler.fit_transform(final_df)

        # x_test = []
        # y_test = []

        # for i in range(100, input_data.shape[0]):
        #     x_test.append(input_data[i-100:i])
        #     y_test.append(input_data[i, 0])
        # x_test, y_test = np.array(x_test), np.array(y_test)
        # y_predicted = model.predict(x_test)

        # # scaler = scaler.scale_
        # # scale_factor = 1 / scaler[0]
        # # y_predicted = y_predicted * scale_factor
        # # y_test = y_test * scale_factor

        # y_demo = scaler.inverse_transform(scaler.inverse_transform(y_predicted))
