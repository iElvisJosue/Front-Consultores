/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import DetallesDeLaExperiencia from "../global/DetallesDeLaExperiencia";
import ButtonSubmit from "../global/ButtonSubmit";
import SinInformacion from "../global/SinInformacion";

export default function PerfilDelConsultorInformacionCVExperiencia({
  consultantExperience,
}) {
  return (
    <div className="Main__Profile__Information--Content--CVResume">
      <TituloDeLaSeccion>Experiencia Profesional 💼</TituloDeLaSeccion>
      {consultantExperience.length > 0 ? (
        consultantExperience.map((experience, index) => (
          <DetallesDeLaExperiencia
            key={index}
            experience={experience}
            numberExperience={index + 1}
          />
        ))
      ) : (
        <SinInformacion />
      )}
      <ButtonSubmit text="Agregar nueva experiencia" />
    </div>
  );
}
