/* eslint-disable react/prop-types */

// COMPONENTES A USAR
import Loader from "../global/Loader";
import PerfilDelConsultorInformacionProyectosDisponibles from "../consultor/PerfilDelConsultorInformacionProyectosDisponibles";

// HOOKS A USAR
import useGetProjects from "../../../hooks/useGetProjects";

// ESTILOS A USAR
import "../../../styles/webapp/PerfilDelConsultorInformacionProyectosDisponibles.css";

export default function PerfilDelConsultorInformacionProyectos({
  consultantInformation,
}) {
  const consultantAreas = consultantInformation.data.consultantAreas;
  const { projectsAvailable, searching } = useGetProjects({ consultantAreas });

  if (searching) return <Loader text="Cargando..." />;
  if (projectsAvailable) {
    const amountProjects = projectsAvailable.length;
    return (
      <PerfilDelConsultorInformacionProyectosDisponibles
        projectsAvailable={projectsAvailable}
        amountProjects={amountProjects}
      />
    );
  } else {
    return <h1>No hay proyectos disponibles</h1>;
  }
}
