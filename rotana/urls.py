from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from rest_framework import permissions
#from staff.views import StaffView
from menu.views import (RoomImagesView, AboutImagesView, AboutView, MenuView, RoomView, StaffView, ContactView, PageView, ReviewView)
from booking.views import BookingView
from hotel.views import HotelView, VisitLogView, HeroImagesView, EcommerceView



#from subscriptions.views import SubscriptionsView
from products.views import (CategoriesView, ProductsView, GenProductsView, ProductThumbsView, AdsView)

from django.shortcuts import render

def apphome(request, page1=None, page2=None, setup=None):
    return render(request, "app/index.html", {})

def homepage(request, **kw):
    return render(request, "homepage.html", {})

def ecomm(request, page2):
    return render(request, "ecomm/index.html", {})

router = DefaultRouter()
router.register("categories", CategoriesView)
router.register("products", ProductsView)
router.register("gproducts", GenProductsView)
router.register("ads", AdsView)

router.register("page", PageView)
router.register("about", AboutView)
router.register("room", RoomView)
router.register("menu", MenuView)
router.register("staff", StaffView)
router.register("booking", BookingView)
router.register("contact", ContactView)
router.register("review", ReviewView)
router.register("hotel", HotelView)
router.register("ecommerce", EcommerceView)
router.register("hits", VisitLogView)
router.register("about-thumb", AboutImagesView)
router.register("hero-thumb", HeroImagesView)
router.register("logo", HeroImagesView)
router.register("rooms-thumb", RoomImagesView)
router.register("product-thumbs", ProductThumbsView)


from drf_yasg import openapi
from drf_yasg.views import get_schema_view
#from rest_framework.schemas import get_schema_view

from rest_framework.documentation import include_docs_urls

admin.site.site_title = "Admin"
admin.site.index_title = "eBoss Web Dashboard"
admin.site.site_url = "/"
admin.site.site_header = "eBoss"
# Swagger documentation setup
schema_view = get_schema_view(
                        openapi.Info(
                title="eBoss API Snippets",
                default_version='v1.0.1',
                description="eBoss",
                website="/",
                terms_of_service="/terms_of_services/",
                privacy_policy="/privacy_policy/",
                contact=openapi.Contact(email="ibmabdulsalam@gmail.com",
                    phone = "+2348100482341"),                                           
                license = openapi.License(name="MIT License"),                                                    ),                                                public=True,
    permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('', homepage, name="home"),
    path('<str:user>/<str:user_id>', homepage, name="home"),
    path('dashboard', homepage, name="index-3"),
    path('d/<str:d>', homepage, name="index-30"),
    path('booking', homepage, name="index-book"),
    path('account/<str:page>', homepage, name="index-1"),
    path('add/<str:add>', homepage, name="index-2"),
    #path('rooms', homepage, name="index-2"),
    #path('page/edit', apphome, name="index-4"),
    #path('hotel/<str:page1>', apphome, name="app_index"),
    #path('shop/<str:page2>', ecomm, name="ecomm_index"),
    path('v1/api/', include(router.urls)),
    path('v1/api/auth/', include('dj_rest_auth.urls')),
    path('v1/api/auth/signup/', include('dj_rest_auth.registration.urls')),
    re_path(r'^docs/', include_docs_urls(title='eBoss API Backend')),                           
    re_path(r'^docs-2(?P<format>\.json|\.yaml)$',
 schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^docs-3/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'
),                                                    
    re_path(r'^docs-4/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    re_path(r'^admin/', admin.site.urls),
    
]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)