export interface Categoria {
    id: number;
    name: string;
    desc: string; 
}

export interface Producto {
    id?: number;
    codigo_producto: string;
    marca: string;
    codigo: string;
    name: string;
    cat: number; 
    stock: number;
}

export interface Precio {
    id: number;    
    fecha: string; //dd-MM-yyyy
    valor: number;
    producto: number;
}


