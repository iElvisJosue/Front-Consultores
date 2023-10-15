/* eslint-disable react/prop-types */

// COMPONENTES A USAR
import PerfilMenu from "../global/PerfilMenu";
import PerfilDelConsultorInformacionCV from "./PerfilDelConsultorInformacionCV";
import PerfilDelConsultorInformacionPerfil from "./PerfilDelConsultorInformacionPerfil";
import PerfilDelConsultorInformacionBanco from "./PerfilDelConsultorInformacionBanco";
import PerfilDelConsultorInformacionProyectos from "./PerfilDelConsultorInformacionProyectos";
import PerfilDelConsultorInformacionConfiguracion from "./PerfilDelConsultorInformacionConfiguracion";
import PerfilDelConsultorInformacionCVResumeEditar from "./PerfilDelConsultorInformacionCVResumeEditar";

// HOOKS A USAR
import useMenu from "../../../hooks/useMenu";

// ESTILOS A USAR
import "../../../styles/webapp/PerfilDelConsultorInformacion.css";

export default function PerfilDelConsultorInformacion({
  consultantInformation,
  setCheckCV,
  checkCV,
}) {
  const { changeMenu, menu } = useMenu();

  const consultantProfileCommonProps = {
    consultantInformation,
    setCheckCV,
    checkCV,
    changeMenu,
    menu,
  };

  const profileInformation = {
    Perfil: (
      <PerfilDelConsultorInformacionPerfil {...consultantProfileCommonProps} />
    ),
    CV: <PerfilDelConsultorInformacionCV {...consultantProfileCommonProps} />,
    CVEditarResume: (
      <PerfilDelConsultorInformacionCVResumeEditar
        {...consultantProfileCommonProps}
      />
    ),
    Banco: (
      <PerfilDelConsultorInformacionBanco {...consultantProfileCommonProps} />
    ),
    Proyectos: (
      <PerfilDelConsultorInformacionProyectos
        {...consultantProfileCommonProps}
      />
    ),
    Configuración: (
      <PerfilDelConsultorInformacionConfiguracion
        {...consultantProfileCommonProps}
      />
    ),
  };

  return (
    <div className="Main__Profile__Information">
      <PerfilMenu changeMenu={changeMenu} menu={menu} />
      <section className="Main__Profile__Information--Content">
        {profileInformation[menu]}
      </section>
    </div>
  );
}
