from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view
from . import views

router = DefaultRouter()
router.register(r'categorias', views.CategoriaViewSet)
router.register(r'productos', views.ProductoViewSet)
router.register(r'productos_disponibles_bodega', views.ProductoDisponibleBodegaViewSet, 'ProductosDisponibles')
router.register(r'precios-productos', views.ProductoConPrecios, 'Producto-Con-Precios')
router.register(r'precios', views.PrecioViewSet)
#router.register(r'producto-con-precios', views.ProductoConPrecios, 'ProductoConPrecios')
urlpatterns = [
    path('', include(router.urls))
]
