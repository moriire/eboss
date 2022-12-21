from users.models import CustomUsers
from django.db.models.signals import post_save
from django.dispatch import receiver

from menu.models import (Menu, Staff, Room, Contact, Page, Review, About)
from .models import Hotel

@receiver(post_save, sender = CustomUsers)
def create_hotel_profile(sender, instance, created, **kwargs):
    if created:
        Hotel.objects.create(user = instance, 
                            about="", 
                            )
        pp = ("home", "about", "team", "menu", "review", "contact")
        for p in pp:
            Page.objects.create(
                            user = instance,
                            title=p, 
                            subtitle="Welcoome to my new page", 
                            enable=True
                            )
        print("created", pp)

@receiver(post_save, sender = Page)
def create_hotel_page(sender, instance, created, **kwargs):
    if created:
        h = Hotel.objects.get(user = instance.user)
        h.page.add(instance.id)

@receiver(post_save, sender = Review)
def create_hotel_review(sender, instance, created, **kwargs):
    if created:
        h = Review.objects.get(user = instance.user)
        h.page.add(instance.id)

@receiver(post_save, sender = About)
def create_hotel_about(sender, instance, created, **kwargs):
    if created:
        h = Hotel.objects.get(user = instance.user)
        h.about = instance.id


@receiver(post_save, sender=Menu)
def create_hotel_menu(sender, instance, created, **kwargs):
    if created:
        h = Hotel.objects.get(user = instance.user)
        h.menu.add(instance.id)

@receiver(post_save, sender=Staff)
def create_hotel_staff(sender, instance, created, **kwargs):
    if created:
        h = Hotel.objects.get(user = instance.user)
        h.staff.add(instance.id)

@receiver(post_save, sender=Room)
def create_hotel_room(sender, instance, created, **kwargs):
    if created:
        h = Hotel.objects.get(user = instance.user)
        h.room.add(instance.id)