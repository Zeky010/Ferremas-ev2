import React, { useEffect } from 'react';
import { Categoria } from '../types/types';
import { useForm, SubmitHandler } from 'react-hook-form';
interface Props {
    onSave: (categoria: Omit<Categoria, 'id'> | Categoria) => void;
    categoria?: Categoria;
}

type FormValues = {
    name: string;
    desc: string;
};

const CategoriaForms: React.FC<Props> = ({ onSave, categoria }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
    
    useEffect(() => {
        if (categoria) {
            reset({ name: categoria.name, desc: categoria.desc });
        } else {
            reset({ name: '', desc: '' });
        }
    }, [categoria, reset]);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if (categoria) {
            onSave({ ...categoria, ...data });
        } else {
            onSave(data);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input type="text" {...register('name', { required: 'Name is required' })} />
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <label>Description:</label>
                <input type="text" {...register('desc', { required: 'Description is required' })} />
                {errors.desc && <span>{errors.desc.message}</span>}
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default CategoriaForms;

// export function CategoriasFormPage() {
//     return (
//         <div>
//             <form action="">
//                 <input></inpu>
//             </form>
//         </div>
//     );
// }