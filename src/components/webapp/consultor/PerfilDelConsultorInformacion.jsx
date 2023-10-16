/* eslint-disable react/prop-types */

// COMPONENTES A USAR
import PerfilMenu from "../global/PerfilMenu";
import PerfilDelConsultorInformacionCV from "./PerfilDelConsultorInformacionCV";
import PerfilDelConsultorInformacionPerfil from "./PerfilDelConsultorInformacionPerfil";
import PerfilDelConsultorInformacionBanco from "./PerfilDelConsultorInformacionBanco";
import PerfilDelConsultorInformacionProyectos from "./PerfilDelConsultorInformacionProyectos";
import PerfilDelConsultorInformacionConfiguracion from "./PerfilDelConsultorInformacionConfiguracion";
import PerfilDelConsultorInformacionCVEditarResume from "./PerfilDelConsultorInformacionCVEditarResume";
import PerfilDelConsultorInformacionCVAdministrarExperiencia from "./PerfilDelConsultorInformacionCVAdministrarExperiencia";
import PerfilDelConsultorInformacionCVAdministrarEducacion from "./PerfilDelConsultorInformacionCVAdministrarEducacion";

// HOOKS A USAR
import useMenu from "../../../hooks/useMenu";
import useID from "../../../hooks/useID";
("../../../hooks/useID");

// ESTILOS A USAR
import "../../../styles/webapp/PerfilDelConsultorInformacion.css";

export default function PerfilDelConsultorInformacion({
  consultantInformation,
  setCheckCV,
  checkCV,
}) {
  const { changeMenu, menu } = useMenu();
  const { elementID, setElementID } = useID();

  const consultantProfileCommonProps = {
    consultantInformation,
    setCheckCV,
    checkCV,
    changeMenu,
    menu,
    setElementID,
    elementID,
  };

  const profileInformation = {
    Perfil: (
      <PerfilDelConsultorInformacionPerfil {...consultantProfileCommonProps} />
    ),
    CV: <PerfilDelConsultorInformacionCV {...consultantProfileCommonProps} />,
    CVEditarResume: (
      <PerfilDelConsultorInformacionCVEditarResume
        {...consultantProfileCommonProps}
      />
    ),
    CVAdministrarExperiencia: (
      <PerfilDelConsultorInformacionCVAdministrarExperiencia
        {...consultantProfileCommonProps}
      />
    ),
    CVAdministrarEducacion: (
      <PerfilDelConsultorInformacionCVAdministrarEducacion
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
      <PerfilMenu
        setElementID={setElementID}
        changeMenu={changeMenu}
        menu={menu}
      />
      <section className="Main__Profile__Information--Content">
        {profileInformation[menu]}
      </section>
    </div>
  );
}
