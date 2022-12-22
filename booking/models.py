from django.db import models
from users.models import CustomUsers
from users.serializers import UserSerializer
from rest_framework import serializers#.viewsets import ModelViewSet
from users.serializers import UserSerializer
#from profile.models import Profile

class Booking(models.Model):
    user = models.ForeignKey(CustomUsers, related_name="user+", on_delete=models.CASCADE)
    full_name = models.CharField(max_length=30, null=True, blank=True)
    phone = models.CharField(max_length=30, null=True, blank=True )
    email = models.EmailField()
    req = models.CharField(max_length=20)
    check_in = models.DateField()
    check_out = models.DateField()
    no_of_adult = models.IntegerField()
    no_of_kids = models.IntegerField()
    note = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.business_name

class BookingSerializer(serializers.ModelSerializer):
    #posted_by = UserSerializer()
    class Meta:
        model = Booking
        fields = "__all__"
