import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTAMOS LAS PÁGINAS DEL WEBSITE
import Inicio from "./pages/website/Inicio";
import ParaQueUnConsultor from "./pages/website/ParaQueUnConsultor";
import QuieresSerUnConsultor from "./pages/website/QuieresSerUnConsultor";
import TienesUnProyecto from "./pages/website/TienesUnProyecto";
import QuienesSomos from "./pages/website/QuienesSomos";
import Preguntanos from "./pages/website/Preguntanos";
import MisionVision from "./pages/website/MisionVision";
import CodigoDelConsultor from "./pages/website/CodigoDelConsultor";
// IMPORTAMOS LAS PÁGINAS DE LA APP
import IniciarSesion from "./pages/webapp/IniciarSesion";
import VerificacionDeCorreo from "./pages/webapp/VerificacionDeCorreo";

// IMPORTAMOS LOS ESTILOS DE LA PAGINA
import "./index.css";

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
        <Route path="/Preguntanos" element={<Preguntanos />} />
        <Route path="/MisionVision" element={<MisionVision />} />
        <Route path="/CodigoDelConsultor" element={<CodigoDelConsultor />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        {/* RUTAS DEL CLIENTE */}
        <Route
          path="/ClienteVerificacionDeCorreo"
          element={<VerificacionDeCorreo />}
        />
        {/* RUTAS DEL CONSULTOR */}
        <Route
          path="/ConsultorVerificacionDeCorreo"
          element={<VerificacionDeCorreo />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
