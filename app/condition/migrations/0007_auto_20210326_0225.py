# Generated by Django 3.1.7 on 2021-03-26 02:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('condition', '0006_auto_20210326_0210'),
    ]

    operations = [
        migrations.RenameField(
            model_name='condition',
            old_name='added_by',
            new_name='patient',
        ),
    ]
