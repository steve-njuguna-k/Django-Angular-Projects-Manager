# Generated by Django 3.2.7 on 2021-09-14 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='MemberAllocated',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='projects',
            name='ProjectCategory',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='tasks',
            name='MemberAllocated',
            field=models.CharField(max_length=50),
        ),
    ]