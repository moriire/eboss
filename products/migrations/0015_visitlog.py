# Generated by Django 4.0.6 on 2023-01-23 15:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0014_productreview'),
    ]

    operations = [
        migrations.CreateModel(
            name='VisitLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip', models.CharField(max_length=15)),
                ('visited_on', models.DateField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='visited+', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]