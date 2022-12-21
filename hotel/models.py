from django.db import models
from rest_framework import serializers#.viewsets import ModelViewSet
from users.models import UserDetailsSerializer
#from room.models import Room, RoomSerializer
#from staff.models import Staff, StaffSerializer
from menu.models import (About, AboutSerializer, ReviewSerializer, Review, Page, Room, Staff, Menu, Contact, PageSerializer, MenuSerializer, StaffSerializer, RoomSerializer, ContactSerializer)
from imgutil import thumbnail
from users.models import CustomUsers

class Hotel(models.Model):
    user = models.OneToOneField(CustomUsers, on_delete=models.CASCADE, related_name="profile+")
    hero_image = models.ImageField(blank=True, upload_to="hero")
    contact = models.ManyToManyField(Contact, related_name="hotel_contact+", blank=True)
    about = models.OneToOneField(About, blank=True, on_delete=models.CASCADE, related_name="about+") 
    room = models.ManyToManyField(Room, blank=True)
    staff = models.ManyToManyField(Staff, blank=True)
    menu = models.ManyToManyField(Menu, blank=True)
    page = models.ManyToManyField(Page, blank=True)
    review = models.ManyToManyField(Review, blank=True)

    def __str__(self):
        return self.user.business_name

    def save(self, commit=True, *a, **b):
        #if commit:
        if self.hero_image:
            super(Hotel, self).save(*a, **b)
            thumbnail(self.hero_image, 1900, 1075)
        else:
            super(Hotel, self).save(*a, **b)

    
class HotelSerializer(serializers.ModelSerializer):
    user = UserDetailsSerializer()
    page = PageSerializer(many=True)
    room = RoomSerializer(many=True)
    staff = StaffSerializer(many=True)
    menu = MenuSerializer(many=True)
    contact = ContactSerializer(many=True)
    about = AboutSerializer()
    review = ReviewSerializer(many=True)
    class Meta:
        model = Hotel
        fields = "__all__"
        #lookup_field = "email"
