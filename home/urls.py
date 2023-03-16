from django.urls import path, include
from .views import indexPage

urlpatterns = [
    path('', indexPage.as_view(), name="index_page"),
]
