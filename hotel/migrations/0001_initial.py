# Generated by Django 4.0.6 on 2022-12-10 10:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('hero_image', models.ImageField(upload_to='')),
                ('address', models.TextField()),
                ('email', models.EmailField(max_length=254)),
                ('about', models.TextField()),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('contact', models.ManyToManyField(related_name='hotel_contact+', to='menu.contact')),
                ('hotel', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile+', to=settings.AUTH_USER_MODEL)),
                ('menu', models.ManyToManyField(blank=True, to='menu.menu')),
                ('page', models.ManyToManyField(blank=True, to='menu.page')),
                ('room', models.ManyToManyField(blank=True, to='menu.room')),
                ('staff', models.ManyToManyField(blank=True, to='menu.staff')),
            ],
        ),
    ]