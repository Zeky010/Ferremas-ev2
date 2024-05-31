#!/bin/bash
./ambiente_desarrollo_virtual/Scripts/activate

python manage.py makemigrations
python manage.py migrate

echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@myproject.com', '123456')" | python3 manage.py shell
python manage.py runserver 0.0.0.0:8000