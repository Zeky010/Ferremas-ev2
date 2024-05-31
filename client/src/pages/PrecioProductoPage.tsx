import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import * as PreciApi from "../api/Precio.api";
import { Producto, Precio } from '../types/types';
import ProductoSelector from '../components/ProductoSelector';
import PrecioList from '../components/PrecioList';
import PrecioForm from "../components/PrecioForm";
import { getProductos } from '../api/Producto.api';
import { getPreciosProducto } from '../api/Precio.api';


const PrecioProductoPage : React.FC = () =>{
    const [productos, setProductos] = useState<Producto[]>([]);
    const [selectedProducto, setSelectedPreciosProducto] = useState<Producto | null>(null);
    const [precios, setPrecios] = useState<Precio[]>([]);
    const [precioForm, setPrecioForm] = useState<Precio>({ id: 0, fecha: '', valor: 0, producto: 0 });
    useEffect(() => {
        
      populateSelect();

    }, []);

    const populateSelect = async () =>{
        const data = await getProductos();
        setProductos(data);    
    }
    
    useEffect(() => {
        if (selectedProducto) {            
            getPreciosProductos(selectedProducto.id?? -1);
        }
        else{
            setPrecios([]);
        }
    }, [selectedProducto]);
    
    const getPreciosProductos = async (id: number) =>{
        const data =  await getPreciosProducto(id);
        setPrecios(data);
    };


    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(event.target.value, 10);
        const producto = productos.find(i => i.id === selectedId) || null;
        setSelectedPreciosProducto(producto);
      };

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPrecioForm(prevForm => ({
        ...prevForm,
        [name]: name === 'valor' || name === 'producto' ? parseFloat(value) : value,
    }));
    };
    
    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (precioForm.id === 0) {
          try {
            const newPrecio = { ...precioForm, producto: selectedProducto!.id! };
            const data = await PreciApi.createPrecios(newPrecio);
            setPrecios([...precios, data]);
            setPrecioForm({ id: 0, fecha: '', valor: 0, producto: 0 });
          } catch (error) {
            console.error('Error creating precio', error);
          }
        } else {
          // Update existing precio
          try {
            //const response = await api.put(`/precios/${precioForm.id}`, precioForm);
            const data = await PreciApi.updatePrecios(precioForm);
            setPrecios(precios.map(p => (p.id === precioForm.id ? data : p)));
            setPrecioForm({ id: 0, fecha: '', valor: 0, producto: 0 });
          } catch (error) {
            console.error('Error updating precio', error);
          }
        }
    };

    const handleEdit = (precio: Precio) => {
        setPrecioForm(precio);
        setPrecios(precios.filter(p => p.id !== precio.id));
      };

    const handleDelete = async (id: number) => {
        try {
          await PreciApi.deletePrecios(id);
          setPrecios(precios.filter(precio => precio.id !== id));
        } catch (error) {
          console.error('Error deleting precio', error);
        }    
    };
    return (
        <div className="App">
          <h1>Select a Producto</h1>
          <ProductoSelector productos={productos} onSelect={handleSelect} />
          {selectedProducto && (
            <>
              <PrecioForm form={precioForm} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
              <PrecioList precios={precios} onDelete={handleDelete} onEdit={handleEdit} />
            </>
          )}
        </div>
      );
}

export default PrecioProductoPage;
