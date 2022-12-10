from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action#, list_route
from rest_framework.response import Response
#from users.models import CustomUsers
from booking.models import BookingSerializer, Booking

class BookingView(ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    #lookup_field = "id"