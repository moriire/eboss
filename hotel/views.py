from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import HotelSerializer, Hotel

class HotelView(ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    lookup_field = "id"

    def list(self, request):
        items = self.get_queryset()
        catser = HotelSerializer(items, many=True)
        return Response(
                catser.data[-1]
                )