from django.shortcuts import render
from django.views import View
import json
from django.http import JsonResponse
from twelvedata import TDClient

td = TDClient(apikey="")

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

        # Object to return as JSON response
        response = {
            "xLabel":xLabel,
            "yLabel":yLabel,
            "sma30": sma30,
            "sma50": sma50,
            "sma150": sma150,
            "sma200":sma200,
        }

        return JsonResponse(response)
        
    # Method to find simple moving average
    def findSimpleMovingAve(self, time, data):
        data.reverse()
        sum = 0
        for i in range(time):
            sum += i
        
        return (sum / time)
