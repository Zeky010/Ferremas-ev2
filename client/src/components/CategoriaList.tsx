import { Categoria } from "../types/types";

interface Props {
    categorias: Categoria[];
    onEdit: (categoria: Categoria) => void;
    onDelete: (id: number) => void;
}

const CategoriaList: React.FC<Props> = ({ categorias, onEdit, onDelete }) => {
    return (
        <div>
            {categorias.map(categoria => (
                <div key={categoria.id}>
                    <span>{categoria.name}</span>
                    <span>{categoria.desc}</span>
                    <button onClick={() => onEdit(categoria)}>Edit</button>
                    <button onClick={() => onDelete(categoria.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default CategoriaList;
//export function CategoriasList() {
//     const [categoriaLista, setCategorias] = useState<Categoria[]>([]);
//     useEffect( () => {
//         async function loadCategorias(){
//         const data = await getAllCategorias();
//         setCategorias(data);
//     }
//     loadCategorias();
//   },[])
//   return (
//     <div>
//     {categoriaLista.map((categoria) => (
//         <CategoriaCard key={categoria.id} categoria={categoria}  onEdit={handleEdit} onDelete={handleDelete}/>
//     ))}
// </div>
//     );
// }

