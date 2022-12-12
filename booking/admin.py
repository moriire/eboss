from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ("full_name", "phone", "email", "check_in", "check_out")
    list_filter = ("full_name", "phone", )
    search_fields = ("name", "phone")
    """
    def num_of_people(self):
    	return self.num_of_kids + self.num_of_adult
	"""
# Register your models here.
