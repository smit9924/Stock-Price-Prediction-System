from django.urls import path, include
from .views import indexPage,tsData, futureData

urlpatterns = [
    path('', indexPage.as_view(), name="index_page"),
    path('tsData/', tsData.as_view(), name="time_series_data"),
    # path('tsDataFuture/', futureData.as_view(), name="time_series_data"),
]
