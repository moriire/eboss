# Generated by Django 4.0.6 on 2022-12-19 09:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_remove_customusers_first_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customusers',
            name='address',
            field=models.TextField(default=''),
        ),
    ]
