/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader, SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../service/Service";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    setIsLoading(true);
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        navigate("/");
      }
    }
    setIsLoading(false);
  }

  async function deletarCategoria() {
    setIsLoading(true);
    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagado com sucesso");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        navigate("/");
      } else {
        alert("Erro ao Deletar a Categoria.");
      }
    }
    setIsLoading(false);
    retornar();
  }
  function retornar() {
    navigate("/categorias");
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Tema</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza que deseja apagar o tema a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between text-center">
        <header className="py-2 px-6 text-fuchsia-600 font-bold text-2xl">
          {categoria.nome}
        </header>
        <p className="p-8 text-3xl ">
          {isLoading ? (
            <div className="flex justify-center">
              <SyncLoader color="#BB2ED7" size={5} />
            </div>
          ) : (
            categoria.descricao
          )}
        </p>
        <div className="flex  justify-around my-2">
          <button
            className="w-1/3 rounded-2xl text-slate-100 bg-red-500 hover:bg-red-800 flex items-center justify-center py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className=" w-1/3 rounded-2xl text-slate-100 bg-sky-300 hover:bg-sky-500 flex items-center justify-center py-2"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
