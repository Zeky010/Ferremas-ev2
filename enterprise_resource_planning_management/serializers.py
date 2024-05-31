from rest_framework import serializers
from .models import Categoria, Producto, PrecioProducto

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id', 'name', 'desc')

class PrecioProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrecioProducto
        fields = '__all__'
class ProductoSerializer(serializers.ModelSerializer):
    cat = serializers.PrimaryKeyRelatedField(queryset = Categoria.objects.all(), write_only = True)
    class Meta:
        model = Producto
        fields = ['id','codigo_producto', 'marca', 'codigo', 'name', 'stock', 'cat']
