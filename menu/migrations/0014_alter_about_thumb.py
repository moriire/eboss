# Generated by Django 4.0.6 on 2022-12-27 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0013_alter_page_background'),
    ]

    operations = [
        migrations.AlterField(
            model_name='about',
            name='thumb',
            field=models.ImageField(blank=True, null=True, upload_to='about'),
        ),
    ]
