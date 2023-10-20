/* eslint-disable react/prop-types */

// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import TextoDeLaSeccion from "../global/TextoDeLaSeccion";

// AYUDAS
import { formatPayment } from "../../../helpers/PerfilDelConsultorInformacionProyectos";

export default function PerfilDelClienteInformacionProyectosLista({
  index,
  project,
  changeMenu,
  setElementID,
  setShowModalDelete,
  setTypeElementDelete,
  filter,
}) {
  const {
    _id,
    nameProject,
    detailsProject,
    areaProject,
    timeProject,
    paymentProject,
  } = project;
  const commonPropsProjectsList = {
    changeMenu,
    setShowModalDelete,
    setTypeElementDelete,
    setElementID,
    title: false,
    nameMenu: "ProyectosAdministrar",
  };
  return (
    <>
      {filter === "Activos" ? (
        <TituloDeLaSeccion
          completed={true}
          editable={true}
          deleted={true}
          id={_id}
          {...commonPropsProjectsList}
        >
          Proyecto {index} 🗃️
        </TituloDeLaSeccion>
      ) : (
        <TituloDeLaSeccion {...commonPropsProjectsList}>
          Proyecto {index} 🗃️
        </TituloDeLaSeccion>
      )}

      <TextoDeLaSeccion title="💼 Nombre:" text={nameProject} />
      <TextoDeLaSeccion title="📝 Detalles:" text={detailsProject} />
      <TextoDeLaSeccion title="🛠️ Área:" text={areaProject} />
      <TextoDeLaSeccion title="🕰️ Tiempo:" text={timeProject} />
      <TextoDeLaSeccion
        title="💰 Pago:"
        text={`$${formatPayment(paymentProject)}`}
      />
      <hr
        style={{
          width: "100%",
          height: 1,
          marginTop: 10,
          border: "none",
          background: "var(--SecondaryPurple)",
        }}
      />
    </>
  );
}
