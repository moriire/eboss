from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from rest_framework import permissions
#from staff.views import StaffView
from menu.views import (MenuView, RoomView, StaffView, ContactView, PageView, ReviewView)
from booking.views import BookingView
from hotel.views import HotelView

from django.shortcuts import render

def apphome(request, page1):
    return render(request, "app/index.html", {})

def homepage(request, **kw):
    return render(request, "homepage.html", {})

router = DefaultRouter()


router.register("page", PageView)
router.register("room", RoomView)
router.register("menu", MenuView)
router.register("staff", StaffView)
router.register("booking", BookingView)
router.register("contact", ContactView)
router.register("review", ReviewView)
router.register("hotel", HotelView)


from drf_yasg import openapi
from drf_yasg.views import get_schema_view
#from rest_framework.schemas import get_schema_view

from rest_framework.documentation import include_docs_urls

admin.site.site_title = "Admin"
admin.site.index_title = "Rotana Hotels Ltd Web Dashboard"
admin.site.site_url = "/"
admin.site.site_header = "Rotana"
# Swagger documentation setup
schema_view = get_schema_view(
                        openapi.Info(
                title="Rotana API Snippets",
                default_version='v1.0.1',
                description="Rotana Hotels Ltd",
                website="/",
                terms_of_service="/terms_of_services/",
                privacy_policy="/privacy_policy/",
                contact=openapi.Contact(email="ibmabdulsalam@gmail.com",
                    phone = "+2348100482341"),                                           
                license = openapi.License(name="MIT License"),                                                    ),                                                public=True,
    permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('<str:page1>', apphome, name="app_index"),
    re_path(r'^v1/api/', include(router.urls)),
    re_path(r'^v1/api/auth/', include('dj_rest_auth.urls')),
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^v1/api/auth/signup/', include('dj_rest_auth.registration.urls')),
    path("", homepage, name="home"),
    path('account/<str:page>', homepage, name="index-1"),
    re_path(r'^dashboard', homepage, name="index-3"),
    re_path(r'^setup', homepage, name="index-4"),
    re_path(r'^docs/', include_docs_urls(title='Rotana Hotel and Suites Backend')),                           
    re_path(r'^swagger(?P<format>\.json|\.yaml)$',
 schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'
),                                                    
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)