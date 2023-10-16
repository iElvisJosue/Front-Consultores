/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import ButtonSubmit from "../global/ButtonSubmit";
import SinInformacion from "../global/SinInformacion";

export default function PerfilDelConsultorInformacionCVHabilidades({
  consultantSkills,
}) {
  return (
    <div className="Main__Profile__Information--Content--CVResume">
      <TituloDeLaSeccion>Habilidades Personales 🧩</TituloDeLaSeccion>
      {consultantSkills.length > 0 ? (
        consultantSkills.map(({ _id, nameSkill }, index) => (
          <TituloDeLaSeccion title={false} key={index} deleted={true} id={_id}>
            {nameSkill}
          </TituloDeLaSeccion>
        ))
      ) : (
        <SinInformacion />
      )}
      <ButtonSubmit text="Agregar Nueva Habilidad" />
    </div>
  );
}
