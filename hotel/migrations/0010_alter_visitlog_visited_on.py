# Generated by Django 4.0.6 on 2022-12-31 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0009_alter_visitlog_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='visitlog',
            name='visited_on',
            field=models.DateField(auto_now_add=True),
        ),
    ]
