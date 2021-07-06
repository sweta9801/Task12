from django.urls import path
from .views import SignupView
#from .views import Client_detailsView

urlpatterns = [
    path('signup', SignupView.as_view()),
    # path('client_details', Client_detailsView.as_view()),
]