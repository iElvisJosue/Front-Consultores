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
      />
      <PerfilDelConsultorInformacionCVEducacion
        consultantEducation={consultantEducation}
        {...consultantInformationCVCommonProps}
      />
      <PerfilDelConsultorInformacionCVAreas
        consultantAreas={consultantAreas}
        {...consultantInformationCVCommonProps}
      />
      <PerfilDelConsultorInformacionCVHabilidades
        consultantSkills={consultantSkills}
        {...consultantInformationCVCommonProps}
      />
      <PerfilDelConsultorInformacionCVIdiomas
        consultantLanguages={consultantLanguages}
        {...consultantInformationCVCommonProps}
      />
    </>
  );
}
