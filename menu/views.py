from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from menu.models import ( PageSerializer, Page, Review, ReviewSerializer, MenuSerializer, RoomSerializer, StaffSerializer, ContactSerializer, Menu, Room, Staff, Contact) 
from hotel.models import Hotel

class PageView(ModelViewSet):
    queryset = Page.objects.all().select_related()
    serializer_class = PageSerializer
    lookup_field = "id"

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)


class ReviewView(ModelViewSet):
    queryset = Review.objects.all().select_related()
    serializer_class = ReviewSerializer
    lookup_field = "id"

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)


class MenuView(ModelViewSet):
    queryset = Menu.objects.all().prefetch_related()
    serializer_class = MenuSerializer
    lookup_field = "user"

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)
    """
    def create(self, request):
        catser = self.get_serializer(data=request.data)
        if catser.is_valid():
            s = catser.save()
            hotel_obj = Hotel.objects.all().last()
            hotel_obj.menu.add(s.id)
            hotel_obj.save()
            return Response(catser.data)
        return Response("something went wrong")
    """
class ContactView(ModelViewSet):
    queryset = Contact.objects.all().select_related()
    serializer_class = ContactSerializer
    lookup_field = "id"

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)

class RoomView(ModelViewSet):
    queryset = Room.objects.all().prefetch_related()
    serializer_class = RoomSerializer
    lookup_field = "id"

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)

class StaffView(ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer
    lookup_field = "id"

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)

    def create(self, request):
        catser = self.get_serializer(data=request.data)
        if catser.is_valid():
            s = catser.save()
            hotel_obj = Hotel.objects.all().last()
            hotel_obj.staff.add(s.id)
            hotel_obj.save()
            return Response(catser.data)
        return Response("something went wrong")
    