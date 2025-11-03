import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import FormCategoria from "./components/categorias/formCategoria/FormCategoria";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/editartema/:id" element={<FormCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
