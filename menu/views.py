from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from menu.models import ( MenuSerializer, RoomSerializer, StaffSerializer, ContactSerializer, Menu, Room, Staff, Contact) 
from hotel.models import Hotel

class MenuView(ModelViewSet):
    queryset = Menu.objects.all().prefetch_related()
    serializer_class = MenuSerializer
    lookup_field = "id"

    def create(self, request):
        catser = self.get_serializer(data=request.data)
        if catser.is_valid():
            s = catser.save()
            hotel_obj = Hotel.objects.all().last()
            hotel_obj.menu.add(s.id)
            hotel_obj.save()
            return Response(catser.data)
        return Response("something went wrong")

class ContactView(ModelViewSet):
    queryset = Contact.objects.all().select_related()
    serializer_class = ContactSerializer
    lookup_field = "id"

class RoomView(ModelViewSet):
    queryset = Room.objects.all().prefetch_related()
    serializer_class = RoomSerializer
    lookup_field = "id"

class StaffView(ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer
    lookup_field = "id"

    def create(self, request):
        catser = self.get_serializer(data=request.data)
        if catser.is_valid():
            s = catser.save()
            hotel_obj = Hotel.objects.all().last()
            hotel_obj.staff.add(s.id)
            hotel_obj.save()
            return Response(catser.data)
        return Response("something went wrong")
    