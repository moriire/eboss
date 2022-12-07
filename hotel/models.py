from django.db import models
from rest_framework import serializers#.viewsets import ModelViewSet
#from room.models import Room, RoomSerializer
#from staff.models import Staff, StaffSerializer
from menu.models import (Room, Staff, Menu, MenuSerializer, StaffSerializer, RoomSerializer)
from imgutil import thumbnail

class Hotel(models.Model):
    name = models.CharField(max_length = 50)
    hero_image = models.ImageField()
    about = models.TextField()
    room = models.ManyToManyField(Room, blank=True)
    staff = models.ManyToManyField(Staff, blank=True)
    menu = models.ManyToManyField(Menu, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def save(self, *a, **b):
        if self.hero_image:
            super(Hotel, self).save(*a, **b)
            thumbnail(self.hero_image, (1900, 1075))

class HotelSerializer(serializers.ModelSerializer):
    menu = RoomSerializer(many=True)
    staff = StaffSerializer(many=True)
    menu = MenuSerializer(many=True)
    class Meta:
        model = Hotel
        fields = "__all__"
