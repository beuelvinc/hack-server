from pyexpat import model
from django.db import models

from auth_app.models import User


class UserBehavior(models.Model):
    user_id=models.IntegerField(blank=True,null=True)
    loyality=models.IntegerField(blank=True,null=True)
    drifting_percentage=models.IntegerField(blank=True,null=True) 
    accelerating_percentage=models.IntegerField(blank=True,null=True) 
    probability_to_crash=models.IntegerField(blank=True,null=True) 



class CarData(models.Model):
    user_id=models.IntegerField(blank=True,null=True)
    timestamp=models.BigIntegerField(blank=True,null=True)
    x=models.DecimalField(blank=True,null=True,max_digits=20, decimal_places=17)
    y=models.DecimalField(blank=True,null=True,max_digits=20, decimal_places=17)
    z=models.DecimalField(blank=True,null=True,max_digits=20, decimal_places=17)

