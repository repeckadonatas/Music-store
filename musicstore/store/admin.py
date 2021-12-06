from django.contrib import admin
from .models import *

# Register your models here.


# class AddAudioAdmin(admin.StackedInline):
#     model = AddAudio


admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(AlbumProduct)
# admin.site.register(AddAudio, AddAudioAdmin)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
