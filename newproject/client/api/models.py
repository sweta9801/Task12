from django.db import models

# Create your models here.

class Client(models.Model):
    Address = models.CharField(max_length=100)
    Contact = models.IntegerField(max_length=10)
    Email = models.EmailField(max_length=100)
    Plans = models.IntegerField()
    Status = models.BooleanField(max_length=1)


class Tradies(models.Model):
    Name = models.CharField(max_length=100)
    Contact = models.IntegerField(max_length=10)
    Email = models.EmailField(max_length=100)
    Plans = models.IntegerField(max_length=100)
    Status = models.BooleanField(max_length=1)