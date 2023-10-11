import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTAMOS LAS PAGINAS DEL PROYECTO
import Inicio from "./pages/website/Inicio";
import ParaQueUnConsultor from "./pages/website/ParaQueUnConsultor";
import QuieresSerUnConsultor from "./pages/website/QuieresSerUnConsultor";
import TienesUnProyecto from "./pages/website/TienesUnProyecto";
import QuienesSomos from "./pages/website/QuienesSomos";
import MisionVision from "./pages/website/MisionVision";
import IniciarSesion from "./pages/website/IniciarSesion";

// IMPORTAMOS LOS ESTILOS DE LA PAGINA
import "./styles/website/EstilosGenerales.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ParaQueUnConsultor" element={<ParaQueUnConsultor />} />
        <Route
          path="/QuieresSerUnConsultor"
          element={<QuieresSerUnConsultor />}
        />
        <Route path="/TienesUnProyecto" element={<TienesUnProyecto />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/MisionVision" element={<MisionVision />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
