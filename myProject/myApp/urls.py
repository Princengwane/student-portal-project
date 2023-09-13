from django.urls import path
from . import views

urlpatterns = [
    path('student/<int:student_id>/', views.student_profile, name='student_profile'),
    path('enroll/<int:student_id>/', views.enroll_course, name='enroll_course'),
    path('grade/<int:enrollment_id>/', views.submit_grade, name='submit_grade'),
]
