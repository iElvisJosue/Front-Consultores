import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTAMOS LAS PAGINAS DEL PROYECTO
import Inicio from "./pages/website/Inicio";
import QuienesSomos from "./pages/website/QuienesSomos";
import ParaQueUnConsultor from "./pages/website/ParaQueUnConsultor";
import IniciarSesion from "./pages/website/IniciarSesion";

// IMPORTAMOS LOS ESTILOS DE LA PAGINA
import "./styles/website/EstilosGenerales.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/ParaQueUnConsultor" element={<ParaQueUnConsultor />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
