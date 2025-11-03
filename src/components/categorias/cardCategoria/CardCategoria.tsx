import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";


interface CardCategoriaProps{
    categoria: Categoria
}


function CardCategoria({categoria}:CardCategoriaProps) {
  return (
    <div className="border-fuchsia-600 border-3 flex flex-col rounded-2xl overflow-hidden justify-between text-center">
      <header className="py-2 text-fuchsia-600 font-bold text-2xl ">
        {categoria.nome}
      </header>
      <p className="p-2 text ">{categoria.descricao}</p>

      <div className="flex  justify-around my-2">
        <Link
          to={`/editartema/${categoria.id}`}
          className=" w-1/3 rounded-2xl text-slate-100 bg-sky-300 hover:bg-sky-500 flex items-center justify-center py-2"
        >
          Editar
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-1/3 rounded-2xl text-slate-100 bg-red-500 hover:bg-red-800 flex items-center justify-center py-2"
        >
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria