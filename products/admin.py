from django.contrib import admin
from .models import Product, ProductImages, GenProduct, Ads

admin.site.register(ProductImages)
admin.site.register(Product)
admin.site.register(Ads)
admin.site.register(GenProduct)