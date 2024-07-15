from django.db import models

class FormSubmission(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    grade = models.CharField(max_length=2, blank=True, null=True)
    subjects = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name
