from users.models import CustomUsers
from django.db.models.signals import post_save
from django.dispatch import receiver

from menu.models import (Menu, Staff, Room, Contact, Page, Review, About)
from products.models import (Category, Product, ProductImages)
from .models import Hotel, Ecommerce

@receiver(post_save, sender = CustomUsers)
def create_hotel_profile(sender, instance, created, **kwargs):
    if created:
        pp = ()
        print("starting...")
        if instance.business_type == "hospitality":
            hotel = Hotel.objects.create(user = instance)
            hotel.about = about
            hotel.save() 
            pp = ("home", "about", "rooms", "review", "contact")
            for p in pp:
                Page.objects.create(
                            user = instance,
                            title=p, 
                            subtitle="Welcoome to my new page", 
                            enable=True
                            )
        #("home", "about", "rooms", "team", "menu", "review", "contact")
        if instance.business_type == "ecommerce":
            about = About.objects.create(user = instance)
            print("creating")
            ecomm = Ecommerce.objects.create(user = instance, about = about)
            ecomm.about = about
            ecomm.save() 
            print("created")
            pp = ("home", "about", "products", "review", "contact")
            for p in pp:
                Page.objects.create(
                            user = instance,
                            title=p, 
                            subtitle="Welcoome to my new page", 
                            enable=True
                            )
        print("created", pp)
"""
@receiver(post_save, sender = Page)
def create_hotel_page(sender, instance, created, **kwargs):
    if created:
        h = Hotel.objects.get(user = instance.user)
        h.page.add(instance.id)
"""

@receiver(post_save, sender = Contact)
def create_hotel_contact(sender, instance, created, **kwargs):
    if created:
        h = Hotel.objects.get(user = instance.user)
        h.contact.add(instance.id)

@receiver(post_save, sender = Review)
def create_hotel_review(sender, instance, created, **kwargs):
    if created:
        h = Hotel.objects.get(user = instance.user)
        h.review.add(instance.id)

@receiver(post_save, sender = About)
def create_hotel_about(sender, instance, created, **kwargs):
    if created:
        print("adding about page")
        """
        try:
            h = Hotel.objects.get(user = instance.user)
            h.about = instance.id
        except Exception:
            print("completed process")
            #h = Ecommerce.objects.get(user__pk = instance.user)
            #h.about=instance.id
        """


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

#Ecommerce
@receiver(post_save, sender = ProductImages)
def create_hotel_product_images(sender, instance, created, **kwargs):
    if created:
        h = Product.objects.get(user = instance.product.user)
        print(instance.product.user)
        #h.thumbs.add(instance.id)