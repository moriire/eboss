from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import HotelSerializer, Hotel, VisitLog, VisitLogSerializer, Ecommerce, EcommerceSerializer

def get_ip_address(request):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

class HeroImagesView(ModelViewSet):
    queryset = Hotel.objects.all().select_related()
    serializer_class = HotelSerializer

    def create(self, request, **kw):
        uploaded_by = request.query_params.get("uploaded_by")
        business_type = request.query_params.get("business_type")
        hotel={}
        if business_type == "hospitality":
            hotel = Hotel.objects.get(user = uploaded_by)
            hotel.hero_image.delete()
            hotel.hero_image = request.data["hero_image"]
            hotel.save()
            print(hotel.hero_image)
            return Response({ "data": "success", "status": 200})
        if business_type == "ecommerce":
            hotel = Ecommerce.objects.get(user = uploaded_by)
            hotel.hero_image.delete()
            hotel.hero_image = request.data["hero_image"]
            hotel.save()
            print(hotel.hero_image)
            print("image uploaded")
            return Response({ "data": "success", "status": 200})
        return Response({ "data": "success", "status": 200})

class LogoImagesView(ModelViewSet):
    queryset = Hotel.objects.all().select_related()
    serializer_class = HotelSerializer

    def create(self, request, **kw):
        uploaded_by = request.query_params.get("uploaded_by")
        business_type = request.query_params.get("business_type")
        hotel={}
        if business_type == "hospitality":
            hotel = Hotel.objects.get(user = uploaded_by)
            hotel.logo.delete()
            hotel.logo = request.data["logo"]
            hotel.save()
            print(hotel.logo)
            return Response({ "data": "success", "status": 200})
        if business_type == "ecommerce":
            hotel = Ecommerce.objects.get(user = uploaded_by)
            hotel.logo.delete()
            hotel.logo = request.data["logo"]
            hotel.save()
            print(hotel.logo)
            print("image uploaded")
            return Response({ "data": "success", "status": 200})
        return Response({ "data": "success", "status": 200})

class EcommerceView(ModelViewSet):
    queryset = Ecommerce.objects.all()
    serializer_class = EcommerceSerializer
    #lookup_field = "user"

    def retrieve(self, request, pk=None):
        ip = get_ip_address(request)
        email = '@'.join([pk, 'gmail.com'])
        item = self.get_queryset().get(user__email = email)
        catser = EcommerceSerializer(item)
        VisitLog.objects.create(user = item.user, ip=ip)
        return Response(
                catser.data
                )

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)

class HotelView(ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    #lookup_field = "user"

    def retrieve(self, request, pk=None):
        ip = get_ip_address(request)
        email = '@'.join([pk, 'gmail.com'])
        item = self.get_queryset().get(user__email = email)
        catser = HotelSerializer(item)
        VisitLog.objects.create(user = item.user, ip=ip)
        return Response(
                catser.data
                )

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)

import datetime as dt 

class VisitLogView(ModelViewSet):
    queryset = VisitLog.objects.all()
    serializer_class = VisitLogSerializer
    #lookup_field = "user"

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        now = dt.datetime.today()-dt.timedelta(days=7)
        if params:
            items = items.filter(visited_on__gte = now, user__pk=pp.get('user__pk'))
        ser = self.get_serializer(items, many=True)
        return Response(ser.data)