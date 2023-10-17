/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import PerfilDelConsultorInformacionCVResume from "./PerfilDelConsultorInformacionCVResume";
import PerfilDelConsultorInformacionCVExperiencia from "./PerfilDelConsultorInformacionCVExperiencia";
import PerfilDelConsultorInformacionCVEducacion from "./PerfilDelConsultorInformacionCVEducacion";
import PerfilDelConsultorInformacionCVAreas from "./PerfilDelConsultorInformacionCVAreas";
import PerfilDelConsultorInformacionCVHabilidades from "./PerfilDelConsultorInformacionCVHabilidades";
import PerfilDelConsultorInformacionCVIdiomas from "./PerfilDelConsultorInformacionCVIdiomas";

// ESTILOS A USAR
import "../../../styles/webapp/PerfilDelConsultorInformacionCV.css";

export default function PerfilDelConsultorInformacionCV({
  consultantInformation,
  setCheckCV,
  checkCV,
  changeMenu,
  setElementID,
  setShowModalDelete,
  setTypeElementDelete,
}) {
  const {
    consultantResume,
    consultantExperience,
    consultantEducation,
    consultantAreas,
    consultantSkills,
    consultantLanguages,
  } = consultantInformation.data;

  const consultantInformationCVCommonProps = {
    setCheckCV,
    checkCV,
    changeMenu,
    setElementID,
    setShowModalDelete,
    setTypeElementDelete,
  };

  return (
    <>
      <PerfilDelConsultorInformacionCVResume
        consultantResume={consultantResume}
        {...consultantInformationCVCommonProps}
        nameMenu="CVEditarResume"
      />
      <PerfilDelConsultorInformacionCVExperiencia
        consultantExperience={consultantExperience}
        {...consultantInformationCVCommonProps}
        nameMenu="CVAdministrarExperiencia"
      />
      <PerfilDelConsultorInformacionCVEducacion
        consultantEducation={consultantEducation}
        {...consultantInformationCVCommonProps}
        nameMenu="CVAdministrarEducacion"
      />
      <PerfilDelConsultorInformacionCVAreas
        consultantAreas={consultantAreas}
        {...consultantInformationCVCommonProps}
        nameMenu="CVAdministrarArea"
      />
      <PerfilDelConsultorInformacionCVHabilidades
        consultantSkills={consultantSkills}
        {...consultantInformationCVCommonProps}
        nameMenu="CVAdministrarHabilidad"
      />
      <PerfilDelConsultorInformacionCVIdiomas
        consultantLanguages={consultantLanguages}
        {...consultantInformationCVCommonProps}
        nameMenu="CVAdministrarIdioma"
      />
    </>
  );
}
