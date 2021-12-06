from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import AlbumProduct


class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class AudioForm(forms.ModelForm):
    class Meta:
        model = AlbumProduct
        fields = ['audio']
