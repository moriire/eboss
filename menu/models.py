from django.db import models
from rest_framework import serializers
from imgutil import thumbnail
from users.models import CustomUsers 

class Review(models.Model):
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="hotel+")
    rate = models.IntegerField(default=5)
    email = models.EmailField()
    full_name = models.CharField(max_length=50)
    #img = models.ImageField(upload_to="review", blank=True)
    comment = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Review Section"
        verbose_name_plural = "Reviews Ssection"

class ReviewSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Review
        fields = "__all__"

class Page(models.Model):
    CHOICES = (
        ("home", "home"),
        ("about", "about"),
        ("rooms", "rooms"),
        ("products", "products"),
        ("team", "team"),
        ("contact", "contact"),
        ("menu", "menu"),
        ("review", "review"),
    )
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE,
     related_name="page_user+")
    title = models.CharField(max_length=15, choices=CHOICES )
    title_alias = models.CharField(max_length=30, null=True, blank=True)
    subtitle = models.CharField(max_length=128)
    background = models.ImageField(blank=True, null=True, upload_to="background")
    enable = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)

    def save(self, commit=True, *a, **b):
        #if commit:
        if self.background:
            super(Page, self).save(*a, **b)
            thumbnail(self.background, 1900, 2850)
        else:
            super(Page, self).save(*a, **b)

    def __str__(self):
        return f"{self.user.business_name} - {self.title}"

    class Meta:
        verbose_name = "Enable & Disable Page"
        verbose_name_plural = "Enable & Disable Pages"

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = "__all__"

class About(models.Model):
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE,
     related_name="page_user+")
    body = models.TextField(max_length=256, default="my about sample text should be about 100-150 words")
    thumb = models.ImageField(blank=True, null=True, upload_to="about")

    def save(self, commit=True, *a, **b):
        #if commit:
        if self.thumb:
            super(About, self).save(*a, **b)
            thumbnail(self.thumb, 1900, 1257)
        else:
            super(About, self).save(*a, **b)

    def __str__(self):
        return self.user.business_name

    class Meta:
        verbose_name = "About Page"
        verbose_name_plural = "About Pages"

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = "__all__"


class Menu(models.Model):
    CHOICES = (
        ("drink", "drink"),
        ("food", "food"),
    )
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE,
     related_name="hotel+")
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
        ("facebook", "facebook"),
        ("twitter", "twitter"),
        ("instagram", "instagram"),
        ("linkedin", "linkedin"),
        ("gmail", "gmail")
    )
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE,
     related_name="hotel+")
    name = models.CharField(max_length=15, choices=CHOICES)
    link = models.CharField(max_length=80, null=True, blank=True)
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
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE,
     related_name="room")
    title = models.CharField(max_length=30, default="Change Name")
    duration = models.CharField(max_length=30, default="daily")
    price = models.FloatField(default=0.0)
    img = models.ImageField(upload_to="rooms/", null=True, blank=True)
    note = models.TextField(default="room detail")
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "contact"
        verbose_name_plural = "Rooms and Suites Section"

    def save(self, *a, **b):
        if self.img:
            super(Room, self).save(*a, **b)
            thumbnail(self.img, 800, 530)
        else:
            super(Room, self).save(*a, **b)

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = "__all__"

class Staff(models.Model):
    user = models.OneToOneField(CustomUsers, on_delete=models.CASCADE, related_name="hotel+")
    full_name = models.CharField(max_length=40)
    position = models.CharField(max_length=30)
    img = models.ImageField(upload_to="team", blank=True)
    bio = models.TextField(max_length=200, null=True, blank=True )
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Staff"
        verbose_name_plural = "Staff Section"


    def save(self, commit=True, *a, **b):
        #if commit:
        if self.img:
            super(Staff, self).save(*a, **b)
            thumbnail(self.img, 800, 800)
        else:
            super(Staff, self).save(*a, **b)

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