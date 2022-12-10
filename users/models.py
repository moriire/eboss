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
    #username = None
    business_name = models.CharField(_("Business Name"), max_length=80)
    phone = models.CharField(_("Phone Number"), max_length=11)
    email = models.EmailField(_("email address"), unique=True,)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    objects = UserManager()

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ["business_name", "phone"]

    def __str__(self):
        return self.business_name

    def get_full_name(self):
        return self.business_name
 
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