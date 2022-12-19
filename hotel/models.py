from django.db import models
from rest_framework import serializers#.viewsets import ModelViewSet
from users.models import UserDetailsSerializer
#from room.models import Room, RoomSerializer
#from staff.models import Staff, StaffSerializer
from menu.models import (Page, Room, Staff, Menu, Contact, PageSerializer, MenuSerializer, StaffSerializer, RoomSerializer, ContactSerializer)
from imgutil import thumbnail
from users.models import CustomUsers

class Hotel(models.Model):
    user = models.OneToOneField(CustomUsers, on_delete=models.CASCADE, related_name="profile+")
    hero_image = models.ImageField(blank=True)
    contact = models.ManyToManyField(Contact, related_name="hotel_contact+", blank=True)
    about = models.TextField(default="") 
    room = models.ManyToManyField(Room, blank=True)
    staff = models.ManyToManyField(Staff, blank=True)
    menu = models.ManyToManyField(Menu, blank=True)
    page = models.ManyToManyField(Page, blank=True)

    def __str__(self):
        return self.user.business_name

    def save(self, *a, **b):
        super(Hotel, self).save(*a, **b)
        if self.hero_image:
            thumbnail(self.hero_image, (1900, 1075))
    
class HotelSerializer(serializers.ModelSerializer):
    user = UserDetailsSerializer()
    page = PageSerializer(many=True)
    room = RoomSerializer(many=True)
    staff = StaffSerializer(many=True)
    menu = MenuSerializer(many=True)
    contact = ContactSerializer(many=True)
    class Meta:
        model = Hotel
        fields = "__all__"
        #lookup_field = "email"
