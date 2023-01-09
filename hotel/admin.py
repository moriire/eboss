from django.contrib import admin
from .models import Hotel, VisitLog, Ecommerce

@admin.register(VisitLog)
class HotelAdmin(admin.ModelAdmin):
    list_display = ("user", "ip", "visited_on")

@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
	pass
    #list_display = ("menu", "staff")
    #list_filter = ("menu", )
admin.site.register(Ecommerce)
# Register your models here.
