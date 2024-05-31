import { Categoria } from "../types/types";

interface CategoriaCardProps {
    categoria: Categoria;
    onEdit: (categoria: Categoria) => void;
    onDelete: (id: number) => void;
}


const CategoriaCard:React.FC<CategoriaCardProps> = ({ categoria, onEdit, onDelete }) => {

    return(
        <div>
            <h1>{categoria.name}</h1>
            <p>{categoria.desc}</p>
            <button onClick={() => onEdit(categoria)}>Edit</button>
            <button onClick={() => onDelete(categoria.id)}>Delete</button>
        </div>
    )
}
export default CategoriaCard;
