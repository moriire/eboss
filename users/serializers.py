from rest_framework import serializers
from .models import CustomUsers

class UserSerializer(serializers.ModelSerializer):
    #img = ImgSerializer(many=True)
    class Meta:
        model = CustomUsers
        fields = (
                    "id",
                    "business_name",
                    "business_type",
                    "phone",
                      )