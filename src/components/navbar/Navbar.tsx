import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-fuchsia-600 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/" className="text-2xl font-bold hover:underline">
            FarmGen
          </Link>
          <div className="flex gap-4 items-center">
            <Link to="/categorias" className="hover:underline">
              Listar Categorias
            </Link>
            <Link to="/cadastrarcategoria" className="hover:underline">
              Cadastrar categoria
            </Link>
            <Link to="/" className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
