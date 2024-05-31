# Generated by Django 5.0.6 on 2024-05-13 04:29

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enterprise_resource_planning_management', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pedidos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fechaPedido', models.DateTimeField(verbose_name='Fecha Pedido')),
                ('fechaEntrega', models.DateTimeField(verbose_name='Fecha Entrega')),
                ('direccion', models.TextField(verbose_name='Direccion')),
                ('producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='enterprise_resource_planning_management.producto')),
            ],
            options={
                'verbose_name': 'Pedido',
                'verbose_name_plural': 'Precios de los Productos',
                'ordering': ['fechaPedido'],
            },
        ),
        migrations.CreateModel(
            name='ProductoPedidos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pedido', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='enterprise_resource_planning_management.pedidos')),
                ('producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='enterprise_resource_planning_management.producto')),
            ],
            options={
                'verbose_name': 'Productos por Pedido',
                'verbose_name_plural': 'Productos por Pedidos',
                'ordering': ['pedido'],
            },
        ),
    ]