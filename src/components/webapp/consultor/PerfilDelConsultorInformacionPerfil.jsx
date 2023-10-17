/* eslint-disable react/prop-types */

// COMPONENTES A USAR
import PerfilDelConsultorInformacionPerfilUsuario from "../../../components/webapp/consultor/PerfilDelConsultorInformacionPerfilUsuario";
import PerfilDelConsultorInformacionPerfilPersonal from "../../../components/webapp/consultor/PerfilDelConsultorInformacionPerfilPersonal";

export default function PerfilDelConsultorInformacionPerfil({
  consultantInformation,
  setCheckCV,
  checkCV,
}) {
  const { consultantInformation: consultantPersonalData } =
    consultantInformation.data;

  return (
    <>
      <PerfilDelConsultorInformacionPerfilUsuario />
      <PerfilDelConsultorInformacionPerfilPersonal
        consultantPersonalData={consultantPersonalData}
        setCheckCV={setCheckCV}
        checkCV={checkCV}
      />
    </>
  );
}
