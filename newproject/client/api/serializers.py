from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Client, Tradies

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class TradiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tradies
        fields = '__all__'