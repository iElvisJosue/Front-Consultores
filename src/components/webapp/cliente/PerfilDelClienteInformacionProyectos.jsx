/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import PerfilDelClienteInformacionProyectosDetalles from "./PerfilDelClienteInformacionProyectosAdministrar";

// ESTILOS A USAR
import "../../../styles/webapp/PerfilDelClienteInformacionProyectos.css";

export default function PerfilDelClienteInformacionProyectos({
  clientInformation,
  changeMenu,
  setElementID,
  setShowModalDelete,
  setTypeElementDelete,
}) {
  const { projectsClient } = clientInformation.data;
  const amountProjects = projectsClient.length;

  return (
    <div className="Main__Profile__Information--Content--ClientProjects">
      <TituloDeLaSeccion>Mis Proyectos: {amountProjects} 👨‍💻</TituloDeLaSeccion>
      {projectsClient.map(
        (
          { _id, nameProject, detailsProject, areaProject, paymentProject },
          index
        ) => (
          <PerfilDelClienteInformacionProyectosDetalles
            key={index}
            index={index + 1}
            id={_id}
            nameProject={nameProject}
            detailsProject={detailsProject}
            areaProject={areaProject}
            paymentProject={paymentProject}
            changeMenu={changeMenu}
            setElementID={setElementID}
            setShowModalDelete={setShowModalDelete}
            setTypeElementDelete={setTypeElementDelete}
            nameMenu="ProyectosEditar"
          />
        )
      )}
    </div>
  );
}
