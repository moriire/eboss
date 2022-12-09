from django.contrib import admin
from .models import Hotel

@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
	pass
    #list_display = ("menu", "staff")
    #list_filter = ("menu", )
#admin.site.register(Hotel)
# Register your models here.
