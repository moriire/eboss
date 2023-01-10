from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext as _
from django.utils import timezone
from .manager import UserManager
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework import serializers
import uuid

class CustomUsers(AbstractBaseUser, PermissionsMixin):
    BTYPE = (
                ("hospitality", "hospitality"),
                ("ecommerce", "ecommerce"),
            )
    SUB =(
            ("basic", "basic"),
            ("superstore", "superstore"),
            ("megastore", "megastore"),
            ("megadeals", "megadeals"),
        )
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    business_name = models.CharField(_("Business Name"), max_length=80)
    business_name_alias = models.CharField(_("Business alias"), max_length=12, blank=True, null=True)
    business_type = models.CharField(_("Business Category"), max_length=12, choices=BTYPE)
    address = models.TextField()
    phone = models.CharField(_("Phone Number"), max_length=11)
    subscription = models.CharField(_("Ads Subscription"), max_length=10, choices=SUB, default="basic")
    email = models.EmailField(_("email address"), unique=True,)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    objects = UserManager()

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ["business_name", "phone", "address", "business_type"]

    def gmap(self):
        addr = self.business_name+self.address
        return "%20".join(addr.split(" "))

    def __str__(self):
        return self.business_name

from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import UserDetailsSerializer, JWTSerializer


class UserDetailsSerializer(UserDetailsSerializer):
    class Meta:   
        model = CustomUsers
        fields = ["pk", "email", "subscription", "phone", "business_name", "business_type", "business_name_alias", "address", "gmap"]
 
"""
class CustomRegisterSerializer(RegisterSerializer):
    pk = serializers.CharField(read_only=True)
    business_name = serializers.CharField(required=True, read_only=False)#, write_only=True)
    phone = serializers.CharField(required=True)
    business_type = serializers.CharField(required=True)
    address = serializers.CharField(required=True)

    def get_cleaned_data(self):
        return {
            'business_name': self.validated_data.get('business_name', ''),
            'business_type': self.validated_data.get('business_type', ''),
            'phone': self.validated_data.get('phone', ''),
            'address': self.validated_data.get('address', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        self.custom_signup(request, user)
        setup_user_email(request, user, [])
        return user
"""

from allauth.account.adapter import DefaultAccountAdapter


class CustomUserAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=True):
        """
        Saves a new `User` instance using information provided in the
        signup form.
        """
        from allauth.account.utils import user_field

        user = super().save_user(request, user, form, False)
        user.address = request.data.get('address', '')
        user.phone = request.data.get('phone', '')
        user.business_name = request.data.get('business_name', '')
        user.business_type = request.data.get('business_type', '')
        user.business_name_alias = request.data.get('business_name_alias', '')
        user.save()
        return user

#from allauth.account.adapter import DefaultAccountAdapter
"""

class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=False):
        user = super().save_user(request, user, form, commit)
        data = form.cleaned_data
        user.business_name = data.get('business_name')
        user.business_type = data.get('business_type')
        user.phone = data.get('phone')
        user.save()
        return user
"""