from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


class Patient(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    contact = models.IntegerField()
    avatat = models.CharField(max_length=50)
    docter = models.ForeignKey(
        get_user_model(), null=True, on_delete=models.CASCADE)
