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
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    business_name = models.CharField(_("Business Name"), max_length=80)
    address = models.TextField(default="")
    phone = models.CharField(_("Phone Number"), max_length=11)
    email = models.EmailField(_("email address"), unique=True,)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    objects = UserManager()

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ["business_name", "phone", "address"]

    def gmap(self):
        addr = self.business_name+self.address
        return "%20".join(addr.split(" "))

    def __str__(self):
        return self.business_name

from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import UserDetailsSerializer


class UserDetailsSerializer(UserDetailsSerializer):
    class Meta:   
        model = CustomUsers
        fields = ["pk", "email", "phone", "business_name", "address", "gmap"]
 

class CustomRegisterSerializer(RegisterSerializer):
    pk = serializers.CharField(read_only=True)
    business_name = serializers.CharField(required=True)#, write_only=True)
    phone = serializers.CharField(required=True)

