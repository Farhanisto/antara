# Generated by Django 3.1.7 on 2021-03-26 02:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('patient', '0001_initial'),
        ('condition', '0005_condition_added_by'),
    ]

    operations = [
        migrations.AlterField(
            model_name='condition',
            name='added_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='patient.patient'),
        ),
    ]
