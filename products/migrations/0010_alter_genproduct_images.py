# Generated by Django 4.0.6 on 2023-01-03 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_alter_genproduct_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='genproduct',
            name='images',
            field=models.ManyToManyField(blank=True, default=[], related_name='gen_images+', to='products.productimages'),
        ),
    ]