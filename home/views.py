from django.shortcuts import render
from django.views import View
import json
from django.http import JsonResponse
from twelvedata import TDClient

td = TDClient(apikey="d96500d09e2c454baf996a66ebc8a5ce")

# Class that render index page
class indexPage(View):
    template_name = 'home/index.html'

    def get(self, request):
        return render(request, self.template_name)

# Class to return timeseries data for graph
class tsData(View):

    def get(self, request):
        symbol = ""
        interval = request.GET.get("interval")
        outputsize = request.GET.get("outputsize")
        
        ts = td.time_series(
            symbol="AAPL",
            interval=interval,
            outputsize=outputsize,
        ).as_json()
        xLabel = []
        yLabel = []

        # Set data as xLabel and yLabel
        # Data in ts is in desending order
        for data in ts:
            xLabel.append(data["datetime"])
            yLabel.append(data["close"])
        
        # Reverse the list to make data appropriate
        xLabel.reverse()
        yLabel.reverse()

        response = {
            "xLabel":xLabel,
            "yLabel":yLabel,
        }

        return JsonResponse(response)
