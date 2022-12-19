from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import HotelSerializer, Hotel

class HotelView(ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    #lookup_field = "email"

    def retrieve(self, request, pk=None):
        #print(pk)
        #email = "@".join((pk, "gmail.com"))
        items = self.get_queryset().get(id = pk)
        catser = HotelSerializer(items)
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