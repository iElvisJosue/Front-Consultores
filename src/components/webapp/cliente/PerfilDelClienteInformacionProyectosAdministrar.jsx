/* eslint-disable react/prop-types */

// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
// ESTILOS A USAR
import "../../../styles/webapp/PerfilDelClienteInformacionProyectosDetalles.css";

export default function PerfilDelClienteInformacionProyectosDetalles({
  index,
  id,
  nameProject,
  detailsProject,
  areaProject,
  paymentProject,
  changeMenu,
  setElementID,
  nameMenu,
  setShowModalDelete,
  setTypeElementDelete,
}) {
  return (
    <div className="Main__Profile__Information--Content--ClientProjects--Details">
      <TituloDeLaSeccion
        title={false}
        completed={true}
        editable={true}
        deleted={true}
        changeMenu={changeMenu}
        setElementID={setElementID}
        nameMenu={nameMenu}
        id={id}
        setShowModalDelete={setShowModalDelete}
        setTypeElementDelete={setTypeElementDelete}
      >
        Proyecto {index} 🗃️
      </TituloDeLaSeccion>
    </div>
  );
}
