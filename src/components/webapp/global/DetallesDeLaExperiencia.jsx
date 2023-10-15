/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import TextoDeLaSeccion from "../global/TextoDeLaSeccion";

export default function DetallesDeLaExperiencia({
  experience,
  numberExperience,
}) {
  const { _id, position, company, resume, startDate, endDate } = experience;
  return (
    <>
      <TituloDeLaSeccion title={false} editable={true} deleted={true} id={_id}>
        Experiencia {numberExperience} 👨‍⚖️
      </TituloDeLaSeccion>
      <TextoDeLaSeccion title="👨‍🏫 Cargo:" text={position} />
      <TextoDeLaSeccion title="🏢 Empresa:" text={company} />
      <TextoDeLaSeccion title="📝 Resumen del cargo:" text={resume} />
      <TextoDeLaSeccion title="📅 Fecha:" text={`${startDate} - ${endDate}`} />
    </>
  );
}
