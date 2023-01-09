from django.db import models
from rest_framework.serializers import ModelSerializer
from users.models import CustomUsers
from imgutil import thumbnail
import os
#(lambda x: f"products/{'_'.join(x.split(' '))}")(product.name)
def prod_loc(instance, filename):
	print("uploading to", instance.product.name)
	y = "_".join(instance.product.name.split(" "))
	return f"products/{y}/{filename}"

class Category(models.Model):
	name = models.CharField(max_length=30)
	desc = models.TextField()

	def __str__(self):
		return self.name

class CategorySerializer(ModelSerializer):
	class Meta:
		model = Category
		fields = "__all__"

class Product(models.Model):
	name = models.CharField(max_length=50)
	user = models.ForeignKey(CustomUsers, related_name="product_user+", on_delete=models.CASCADE)
	#subscription = models.ForeignKey(Category, related_name="product_category+", on_delete=models.CASCADE)
	category = models.ForeignKey(Category, related_name="product_category+", on_delete=models.CASCADE)
	price = models.FloatField(default=0.0)
	#thumbs = models.ManyToManyField(ProductImages, blank=True, related_name="product_thumbs+")
	quantity = models.IntegerField(default=0)
	desc = models.TextField()
	created_on = models.DateTimeField(auto_now_add = True)

	def __str__(self):
		return self.name
	"""
	def save(self, *a, **b):
		if self.img:
			res = ProductImages.objects.create(
				thumb = self.img,
				views = "front"
				)
			self.img.add(res.id)
		super(self, ProductImages).save(*a, **b)
	"""
class ProductWithCategorySerializer(ModelSerializer):
	category = CategorySerializer()
	#thumbs = ProductImageSerializer(many=True)
	class Meta:
		model = Product
		fields = "__all__"

class ProductSerializer(ModelSerializer):
	class Meta:
		model = Product
		fields = "__all__"

class ProductImages(models.Model):
	VIEWS = (
			("front", "front"),
			("back", "back"),
			("rear", "rear"),
		)
	product = models.ForeignKey(Product, on_delete = models.CASCADE, related_name="productimg+")
	projection = models.CharField(max_length=10, choices=VIEWS)
	thumb = models.ImageField(upload_to=prod_loc, blank=True)
	desc = models.TextField(default="short description")

	def save(self, commit=True, *a, **b):
		if self.thumb:
			super(ProductImages, self).save(*a, **b)
			thumbnail(self.thumb, 650, 650)
		else:
			super(ProductImages, self).save(*a, **b)

	def __str__(self):
		return self.product.name

class ProductImageSerializer(ModelSerializer):
	class Meta:
		model = ProductImages
		fields = "__all__"

class GenProduct(models.Model):
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="gen_product+")
	images = models.ManyToManyField(ProductImages, blank=True, related_name="gen_images+")

	def __str__(self):
		return self.product.name

class GenProductSerializer(ModelSerializer):
	product = ProductWithCategorySerializer()
	images = ProductImageSerializer(many=True)
	class Meta:
		model = GenProduct
		fields = "__all__"

class Ads(models.Model):
	product = models.ForeignKey(Product, on_delete = models.CASCADE, related_name="productads+")
	imgs = models.ManyToManyField(ProductImages, blank=True)
	created_on = models.DateTimeField(auto_now_add = True)

	def __str__(seWithCalf):
		return self.created_on
# Create your models here.


class AdSerializer(ModelSerializer):
	class Meta:
		model = Ads
		fields = "__all__"

class XAdSerializer(ModelSerializer):
	product = ProductSerializer()
	imgs = ProductImageSerializer(many=True)
	class Meta:
		model = Ads
		fields = "__all__"
# Create your models here.
