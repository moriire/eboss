from django.db import models
from rest_framework import serializers#.viewsets import ModelViewSet
from imgutil import thumbnail

class Page(models.Model):
    CHOICES = (
        ("home", "home"),
        ("about", "about"),
        ("contact", "contact"),
        ("menu", "menu"),
        ("review", "review"),
    )
    title = models.CharField(max_length=15, choices=CHOICES )
    subtitle = models.CharField(max_length=128)
    enable = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Enable & Disable Page"
        verbose_name_plural = "Enable & Disable Pages"

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = "__all__"

class Menu(models.Model):
    CHOICES = (
        ("drink", "drink"),
        ("food", "food"),
    )
    name = models.CharField(max_length=50)
    nature = models.CharField(max_length=15, choices=CHOICES )
    price= models.FloatField(default=0.0)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Menu"
        verbose_name_plural = "Food & Drink Section"


class Contact(models.Model):
    CHOICES = (
        ("phone", "phone"),
        ("social", "social"),
    )
    nature = models.CharField(max_length=15, choices=CHOICES )
    name = models.CharField(max_length=15)
    phone = models.CharField(max_length=11, null=True, blank=True)
    link = models.URLField(null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "contact"
        verbose_name_plural = "Contact Section"

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"

class Room(models.Model):
    title = models.CharField(max_length=30)
    duration = models.CharField(max_length=30)
    price = models.FloatField(max_length=30, null=True, blank=True )
    img = models.ImageField(upload_to="rooms/")
    note = models.TextField(blank = True)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "contact"
        verbose_name_plural = "Rooms and Suites Section"

    def save(self, *a, **b):
        if self.img:
            super(Room, self).save(*a, **b)
            thumbnail(self.img, (800, 530))

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = "__all__"

class Staff(models.Model):
    full_name = models.CharField(max_length=40)
    position = models.CharField(max_length=30)
    img = models.ImageField()
    bio = models.TextField(max_length=200, null=True, blank=True )
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Staff"
        verbose_name_plural = "Staff Section"


    def save(self, *a, **b):
        if self.img:
            super(Staff, self).save(*a, **b)
            thumbnail(self.img, (800, 800))

class StaffSerializer(serializers.ModelSerializer):
    #posted_by = UserSerializer()
    class Meta:
        model = Staff
        fields = "__all__"

class MenuSerializer(serializers.ModelSerializer):
    #posted_by = UserSerializer()
    class Meta:
        model = Menu
        fields = "__all__"