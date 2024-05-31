from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Categoria, Producto, PrecioProducto
from .serializers import *

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoDisponibleBodegaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Producto.objects.filter(stock=0)  # Productos con stock mayor a cero
    serializer_class = ProductoSerializer

class PrecioViewSet(viewsets.ModelViewSet):
    queryset =  PrecioProducto.objects.all()
    serializer_class = PrecioProductoSerializer
     
class ProductoConPrecios(viewsets.ReadOnlyModelViewSet):
    queryset =  PrecioProducto.objects.all()
    serializer_class = PrecioProductoSerializer
    @action(detail=True, methods=['get'])
    def precios(self, request, pk=None):
        precios = self.get_queryset().filter(producto_id=pk)
        serializer = self.get_serializer(precios, many=True)
        return Response(serializer.data)


