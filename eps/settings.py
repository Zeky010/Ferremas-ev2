"""
Django settings for eps project.

Generated by 'django-admin startproject' using Django 3.1.3.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '3jb+e8ics9usxma!b$6-$n94^^#-h(96d7s$ezn1(7b_!-g^vy'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']
CORS_ORIGIN_ALLOW_ALL = False


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # own
    'user_management',
    'enterprise_resource_planning_management',

    # 3rd party apps
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
    'django_crontab',
    'djoser',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'eps.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'eps.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

try:

    # if PROD:
    #     DATABASES = {
    #         'default': {
    #             'ENGINE': os.environ['BASE_DB_ENGINE'],
    #             'NAME': os.environ['BASE_DB'],
    #             'USER': os.environ['BASE_DB_USER'],
    #             'PASSWORD': os.environ['BASE_DB_PASSWD'],
    #             'HOST': os.environ['BASE_DB_HOST'],
    #             'PORT': os.environ['BASE_DB_PORT'],
    #         }
    #     }

    # else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / "db.sqlite3",
        }
    }

except Exception as E:
    raise ValueError(E)

AUTH_USER_MODEL = 'user_management.User'

LOGIN_REDIRECT_URL = 'home'
LOGOUT_REDIRECT_URL = 'home'


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'es-es'

TIME_ZONE = 'Chile/Continental'

USE_TZ = True

USE_I18N = True

USE_L10N = True

USE_TZ = True

OTP_NAME = 'FERREMAS'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = '/code/static/'

CORS_ALLOWED_ORIGINS = ["http://localhost:5173"]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    ),
}

CRONTAB_COMMAND_SUFFIX = '2>&1'

CRONJOBS = [
]
#paypal API credentials
PAYPAL_CLIENT_ID = env('PAYPAL_CLIENT_ID')
PAYPAL_CLIENT_SECRET = env('PAYPAL_CLIENT_SECRET')
PAYPAL_MODE = env('PAYPAL_MODE', default='sandbox')