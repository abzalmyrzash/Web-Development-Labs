from django_filters import rest_framework as filters
from api.models import Task


class TaskFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')
    min_due_on = filters.DateTimeFilter(field_name='due_on', lookup_expr='gte')
    max_due_on = filters.DateTimeFilter(field_name='due_on', lookup_expr='lte')

    class Meta:
        model = Task
        fields = ('id', 'name', 'status', 'task_list_id', 'due_on')
