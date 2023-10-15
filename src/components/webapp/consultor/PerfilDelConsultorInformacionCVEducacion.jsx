/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import DetallesDeLaEducacion from "../global/DetallesDeLaEducacion";
import ButtonSubmit from "../global/ButtonSubmit";
import SinInformacion from "../global/SinInformacion";

export default function PerfilDelConsultorInformacionCVEducacion({
  consultantEducation,
}) {
  return (
    <div className="Main__Profile__Information--Content--CVResume">
      <TituloDeLaSeccion>Educación Profesional 📚</TituloDeLaSeccion>
      {consultantEducation.length > 0 ? (
        consultantEducation.map((education, index) => (
          <DetallesDeLaEducacion
            key={index}
            education={education}
            numberEducation={index + 1}
          />
        ))
      ) : (
        <SinInformacion />
      )}
      <ButtonSubmit text="Agregar nueva educación" />
    </div>
  );
}
