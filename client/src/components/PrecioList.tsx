import React from 'react';
import { Precio } from '../types/types';

interface PrecioListProps {
  precios: Precio[];
  onDelete: (id: number) => void;
  onEdit: (precio: Precio) => void;
}

const PrecioList: React.FC<PrecioListProps> = ({ precios, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Precios</h2>
      <ul>
        {precios.map(precio => (
          <li key={precio.id}>
            <p>Fecha: {precio.fecha}</p>
            <p>Valor: {precio.valor}</p>
            <button onClick={() => onEdit(precio)}>Edit</button>
            <button onClick={() => onDelete(precio.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrecioList;
