# Generated by Django 4.0.6 on 2022-12-21 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0008_page_background'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rate',
            field=models.IntegerField(default=5),
        ),
    ]