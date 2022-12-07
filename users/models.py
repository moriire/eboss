from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext as _
from django.utils import timezone
from .manager import UserManager
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework import serializers
import uuid
#import profile
#from profile.models import Profile
class CustomUsers(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    username = None
    first_name = models.CharField(_("First Name"), max_length=50)
    last_name = models.CharField(_("last Name"), max_length=50)
    email = models.EmailField(_("email address"), unique=True,)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    phone = models.CharField(_("phone number"), max_length=3)
    gender = models.CharField(_("Gender"), max_length=3)
    objects = UserManager()

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ["first_name", "last_name"]

    def __str__(self):
        return self.email

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
 
"""
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import UserDetailsSerializer

class CustomRegisterSerializer(RegisterSerializer):
    GENDER=(
            ("M", "M"),
            ("F", "F"),
            ("Tx", "Tx"),
            )
    pk = serializers.CharField(read_only=True)
    first_name = serializers.CharField(required=True)#, write_only=True)
    last_name = serializers.CharField(required=True)
    phone = serializers.CharField(required=False)
    gender = serializers.CharField(required=True)

class UserDetailsSerializer(UserDetailsSerializer):
    class Meta:   
        model = CustomUsers
        fields = ["pk", "email", "first_name", "last_name", "gender", "phone"]

"""