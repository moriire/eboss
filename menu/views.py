from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from menu.models import (
 #About, AboutSerializer,
 #PageSerializer, Page, 
 BizReview,
 BizReviewSerializer,
 # MenuSerializer, RoomSerializer, StaffSerializer, ContactSerializer, Menu, Room, Staff, Contact
 ) 
#from hotel.models import Hotel
from users.models import CustomUsers
"""
class AboutImagesView(ModelViewSet):
    queryset = About.objects.all().select_related()
    serializer_class = AboutSerializer

    def create(self, request, **kw):
        uploaded_by = request.query_params.get("uploaded_by")
        print(uploaded_by)
        about = About.objects.get(user = uploaded_by)
        print(about.thumb)
        about.thumb.delete()
        about.thumb = request.data["thumb"]
        about.save()
        print(about.thumb)
        print("image uploaded")
        return Response({ "data": "success", "status": 200})

class RoomImagesView(ModelViewSet):
    queryset = Room.objects.all().select_related()
    serializer_class = RoomSerializer

    def create(self, request, **kw):
        uploaded_by = request.query_params.get("uploaded_by")
        print(uploaded_by)
        user = CustomUsers.objects.get(pk=uploaded_by)
        room = Room.objects.create(
            user = user,
            img = request.data["img"]
            )
        print("image uploaded")
        return Response({ "data": "success", "status": 200})

class AboutView(ModelViewSet):
    queryset = About.objects.all().select_related()
    serializer_class = AboutSerializer
    lookup_field = "id"

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)

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

"""
class BizReviewView(ModelViewSet):
    queryset = BizReview.objects.all().select_related()
    serializer_class = BizReviewSerializer
    lookup_field = "id"

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)

"""
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

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)

class RoomView(ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)

    def update(self, request, **kw):
        room = self.get_queryset().get(id=request.data['id'])
        room.user = CustomUsers.objects.get(pk = request.data['user'])
        ser = self.get_serializer(room)
        room.price = int(request.data['price'])
        room.title = request.data['title']
        room.note = request.data['note']
        room.save()
        print("image uploaded")
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
"""