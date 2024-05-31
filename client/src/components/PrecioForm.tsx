// src/PrecioForm.tsx
import React, { ChangeEvent, FormEvent } from 'react';
import { Precio } from '../types/types';

interface PrecioFormProps {
  form: Precio;
  onFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const PrecioForm: React.FC<PrecioFormProps> = ({ form, onFormChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={form.fecha}
          onChange={onFormChange}
          placeholder="dd-MM-yyyy"
        />
      </div>
      <div>
        <label htmlFor="valor">Valor:</label>
        <input
          type="number"
          id="valor"
          name="valor"
          value={form.valor}
          onChange={onFormChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PrecioForm;
