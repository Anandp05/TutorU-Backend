from django import forms
from .models import PopupForm

class PopupFormForm(forms.ModelForm):
    class Meta:
        model = PopupForm
        fields = ['name', 'email', 'message']
