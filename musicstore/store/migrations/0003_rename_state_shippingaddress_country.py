# Generated by Django 3.2.9 on 2021-12-03 14:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shippingaddress',
            old_name='state',
            new_name='country',
        ),
    ]
