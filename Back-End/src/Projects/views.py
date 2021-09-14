from .serializers import CategorySerializer, TaskSerializer, MemberSerializer, ProjectSerializer
from .models import Categories, Tasks, Members, Projects
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def ProjectAPI(request, id=0):
    if request.method == 'GET':
        project = Projects.objects.all()
        serializer = ProjectSerializer(project, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        project_data = JSONParser().parse(request)
        serializer = ProjectSerializer(data=project_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Project Added Successfully!', safe=False, status=status.HTTP_201_CREATED)
        return JsonResponse('Failed To Add Project', safe=False, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PUT':
        project_data = JSONParser().parse(request)
        project = Projects.objects.get(ProjectID = project_data['ProjectID'])
        serializer = ProjectSerializer(instance=project, data=project_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Project Updated Successfully!', safe=False, status=status.HTTP_201_CREATED)
        return JsonResponse('Failed To Update Project', safe=False, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        project = Projects.objects.get(ProjectID=id)
        project.delete()
        return JsonResponse('Project Successfully Deleted!', safe=False, status=status.HTTP_200_OK)

@csrf_exempt
def TaskAPI(request, id=0):
    if request.method == 'GET':
        task = Tasks.objects.all()
        serializer = TaskSerializer(task, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        task_data = JSONParser().parse(request)
        serializer = TaskSerializer(data=task_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Task Added Successfully!', safe=False, status=status.HTTP_201_CREATED)
        return JsonResponse('Failed To Add Task', safe=False, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PUT':
        task_data = JSONParser().parse(request)
        task = Tasks.objects.get(TaskID = task_data['TaskID'])
        serializer = TaskSerializer(instance=task, data=task_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Task Updated Successfully!', safe=False, status=status.HTTP_201_CREATED)
        return JsonResponse('Failed To Update Task', safe=False, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        task = Tasks.objects.get(TaskID=id)
        task.delete()
        return JsonResponse('Task Successfully Deleted!', safe=False, status=status.HTTP_200_OK)

@csrf_exempt
def CategoryAPI(request, id=0):
    if request.method == 'GET':
        category = Categories.objects.all()
        serializer = CategorySerializer(category, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        category_data = JSONParser().parse(request)
        serializer = CategorySerializer(data=category_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Category Added Successfully!', safe=False, status=status.HTTP_201_CREATED)
        return JsonResponse('Failed To Add Category', safe=False, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PUT':
        category_data = JSONParser().parse(request)
        category = Categories.objects.get(CategoryID = category_data['CategoryID'])
        serializer = CategorySerializer(instance=category, data=category_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Category Updated Successfully!', safe=False, status=status.HTTP_201_CREATED)
        return JsonResponse('Failed To Update Category', safe=False, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        category = Categories.objects.get(CategoryID=id)
        category.delete()
        return JsonResponse('Category Successfully Deleted!', safe=False, status=status.HTTP_200_OK)

@csrf_exempt
def MemberAPI(request, id=0):
    if request.method == 'GET':
        member = Members.objects.all()
        serializer = MemberSerializer(member, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        member_data = JSONParser().parse(request)
        serializer = MemberSerializer(data=member_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Member Added Successfully!', safe=False, status=status.HTTP_201_CREATED)
        return JsonResponse('Failed To Add Member', safe=False, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PUT':
        member_data = JSONParser().parse(request)
        member = Members.objects.get(MemberID = member_data['MemberID'])
        serializer = MemberSerializer(instance=member, data=member_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Member Updated Successfully!', safe=False, status=status.HTTP_201_CREATED)
        return JsonResponse('Failed To Update Member', safe=False, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        member = Members.objects.get(MemberID=id)
        member.delete()
        return JsonResponse('Member Successfully Deleted!', safe=False, status=status.HTTP_200_OK)
