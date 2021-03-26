

from django.utils.translation import gettext as _
from model_utils import Choices
from django.db import models
from patient.models import Patient
# Create your models here.


class Condition(models.Model):
    SEVERITY = Choices(
        (0, 'NOT', _('Not')),
        (1, 'LOW', _('Low')),
        (2, 'MID', _('Mid')),
        (3, 'HIGE', _('High')),
    )
    name = models.CharField(max_length=50)
    severity = models.PositiveSmallIntegerField(
        choices=SEVERITY, default=SEVERITY.LOW)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField()
    patient = models.ForeignKey(
        Patient, null=True, on_delete=models.CASCADE)
