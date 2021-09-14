from django.conf.urls import url
from Projects import views

urlpatterns = [
    url(r'^api/v1/projects/$',views.ProjectAPI),
    url(r'^api/v1/projects/([0-9]+)$',views.ProjectAPI),

    url(r'^api/v1/tasks/$',views.TaskAPI),
    url(r'^api/v1/tasks/([0-9]+)$',views.TaskAPI),

    url(r'^api/v1/categories/$',views.CategoryAPI),
    url(r'^api/v1/categories/([0-9]+)$',views.CategoryAPI),

    url(r'^api/v1/members/$',views.MemberAPI),
    url(r'^api/v1/members/([0-9]+)$',views.MemberAPI),
]
