from django.contrib import admin
from .models import Product, ProductImages, GenProduct

admin.site.register(ProductImages)
admin.site.register(Product)
admin.site.register(GenProduct)