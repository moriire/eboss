from django.db import models
from users.models import CustomUsers
from users.serializers import UserSerializer
from rest_framework import serializers#.viewsets import ModelViewSet
from users.serializers import UserSerializer
#from profile.models import Profile

class Booking(models.Model):
    contact_of = models.OneToOneField(CustomUsers, related_name="contact+", on_delete=models.CASCADE)
    city = models.CharField(max_length=30, null=True, blank=True)
    country = models.CharField(max_length=30, null=True, blank=True )
    address= models.TextField(null=True, blank=True)
    enable = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.contact_of.username

class BookingSerializer(serializers.ModelSerializer):
    posted_by = UserSerializer()
    class Meta:
        model = Booking
        fields = "__all__"
