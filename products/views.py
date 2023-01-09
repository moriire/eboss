from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from users.models import CustomUsers
from hotel.models import Ecommerce
from .models import (
					Product,
					ProductSerializer,
					GenProduct,
					GenProductSerializer, 
					ProductWithCategorySerializer, 
					Ads, 
					Category, 
					CategorySerializer, 
					ProductImages, 
					ProductImageSerializer, 
					Ads, 
					AdSerializer,
				 	XAdSerializer
				 	)

class CategoriesView(ModelViewSet):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer

class ProductsView(ModelViewSet):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer

	def create(self, request, *w, **kw):
		ser = self.get_serializer(data = request.data)
		if ser.is_valid(raise_exception=True):
			ser.save()
			product = Product.objects.get(id=ser.data.get("id"))
			GenProduct.objects.create(product = product)
			return Response(ser.data)
		return Response(ser.errors)

class ProductThumbsView(ModelViewSet):
	queryset = ProductImages.objects.all()
	serializer_class = ProductImageSerializer

	def create(self, request, **kw):
		user = request.query_params.get("user")
		projection = request.query_params.get("projection")
		product_id = int(request.query_params.get("product_id"))
		get_prev_image = ProductImages.objects.filter(product__id=product_id).filter(projection=projection).first()
		if get_prev_image:
			get_prev_image.thumb.delete()
			get_prev_image.delete()
		product_image_obj = ProductImages.objects.create(
			product= Product.objects.get(id=product_id),
			projection=projection,
			thumb = request.data['thumb'],
			desc = "Something simple as description"
			)
		gproduct = GenProduct.objects.get(product__id = product_id)
		gproduct.images.add(product_image_obj.id)
		gp_obj = gproduct.save()
		ecomm = Ecommerce.objects.get(user__pk = user)
		ecomm.products.add(gp_obj.id)
		ecomm.save()
		return Response({ "data": "success", "status": 200})

class AdsView(ModelViewSet):
	queryset = Ads.objects.all().select_related()
	serializer_class = AdSerializer

	def retrieve(self, request, pk):
		item = self.get_queryset().filter(id=pk).first()
		catser = XAdSerializer(item)
		return Response(catser.data)

	def list(self, request):
		items = self.get_queryset()
		params = request.query_params
		pp = params.dict()
		if params:
			items = items.filter(**pp)
		catser = XAdSerializer(items, many=True)
		return Response(
             	catser.data
                )
class GenProductsView(ModelViewSet):
	queryset = GenProduct.objects.all()
	serializer_class = GenProductSerializer
	"""
	def create(self, request, instance, validated_data):
		instance.images = validated_data.get("images", [])
		instance.product = validated_data.get("product")
		instance.save()
		print(instance)
		return Response(catser.data)
	
	def create(self, request, *args, **kwargs):
		ser = self.get_serializer(data = request.data)
		if ser.is_valid(raise_exception=False):
			ser.validated_data.images = None
			ser.save()
			return Response(catser.data)
		return Response(ser.errors)
	
	def retrieve(self, request, pk):
		item = self.get_queryset().get(id=pk)
		catser = ProductWithCategorySerializer(item)
		return Response(catser.data)

	def list(self, request):
		items = self.get_queryset()
		params = request.query_params
		pp = params.dict()
		if params:
			items = items.filter(**pp)
		catser = ProductWithCategorySerializer(items, many=True)
		return Response(
             	catser.data
                )
	"""

# Create your views here.