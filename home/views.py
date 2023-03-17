from django.shortcuts import render
from django.views import View
import json
from django.http import JsonResponse

# Class that render index page
class indexPage(View):
    template_name = 'home/index.html'

    def get(self, request):
        return render(request, self.template_name)

# Class to return timeseries data for graph
class tsData(View):

    def get(self, request):
        print(request.GET.get('timePeriod'))
        responese = {
            "name":"smit"
        }
        return JsonResponse(responese)
