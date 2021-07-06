from rest_framework import viewsets
from . import models
from . import serializers

class ClientViewset(viewsets.ModelViewSet):
    queryset = models.Client.objects.all()
    serializer_class = serializers.ClientSerializer


class TradiesViewset(viewsets.ModelViewSet):
    queryset = models.Tradies.objects.all()
    serializer_class = serializers.TradiesSerializer