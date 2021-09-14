from django.db import models

# Create your models here.
class Categories(models.Model):
    CategoryID = models.AutoField(primary_key=True)
    CategoryName = models.CharField(max_length=50)

class Members(models.Model):
    MemberID = models.AutoField(primary_key=True)
    MemberName = models.CharField(max_length=50)

class Projects(models.Model):
    ProjectID = models.AutoField(primary_key=True)
    ProjectName = models.CharField(max_length=50)
    ProjectCategory = models.CharField(max_length=50)
    Budget = models.IntegerField()
    MemberAllocated = models.CharField(max_length=50)
    DueBy = models.DateField()

class Tasks(models.Model):
    TaskID = models.AutoField(primary_key=True)
    TaskName = models.CharField(max_length=50)
    MemberAllocated = models.CharField(max_length=50)