from django.contrib import admin
from .models import (Page, Menu, Room, Staff, Contact, Review)
admin.site.register(Contact)
admin.site.register(Page)
admin.site.register(Review)


@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ("name", "price")
    list_filter = ("nature", "price", )
    search_fields = ("nature", "name", "price")
    
@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ("title", "price", )
    list_filter = ("title", "price", )
    search_fields = ("title", "price")

@admin.register(Staff)
class StaffAdmin(admin.ModelAdmin):
    list_display = ("full_name", "position",)
    list_filter = ("full_name", "position",)
    search_fields = ("full_name", "position")

