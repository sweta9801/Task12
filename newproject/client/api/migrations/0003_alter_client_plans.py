# Generated by Django 3.2.4 on 2021-06-30 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_client_plans'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='Plans',
            field=models.IntegerField(max_length=10),
        ),
    ]