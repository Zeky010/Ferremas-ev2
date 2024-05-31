# Generated by Django 5.0.6 on 2024-05-13 21:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enterprise_resource_planning_management', '0002_pedidos_productopedidos'),
    ]

    operations = [
        migrations.AddField(
            model_name='productopedidos',
            name='cantidad',
            field=models.DecimalField(decimal_places=3, default=0, max_digits=8, verbose_name='Cantidad'),
        ),
        migrations.CreateModel(
            name='TipoMedidaProducto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('detalle', models.TextField(max_length=20, verbose_name='Detalle')),
                ('decimales', models.BooleanField(default=False, verbose_name='Decimal o Entero')),
                ('producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='enterprise_resource_planning_management.producto', unique=True)),
            ],
            options={
                'verbose_name': 'TipoMedidaProducto',
                'verbose_name_plural': 'TipoMedidaProductos',
                'ordering': ['producto'],
            },
        ),
    ]
