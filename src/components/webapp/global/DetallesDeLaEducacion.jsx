/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import TextoDeLaSeccion from "../global/TextoDeLaSeccion";

export default function DetallesDeLaEducacion({
  education,
  numberEducation,
  changeMenu,
  nameMenu,
  setElementID,
}) {
  const { _id, institution, area, educationLevel, startDate, endDate } =
    education;
  return (
    <>
      <TituloDeLaSeccion
        changeMenu={changeMenu}
        nameMenu={nameMenu}
        setElementID={setElementID}
        title={false}
        editable={true}
        deleted={true}
        id={_id}
      >
        Educación {numberEducation} 👨‍🎓
      </TituloDeLaSeccion>
      <TextoDeLaSeccion title="🏫 Institución:" text={institution} />
      <TextoDeLaSeccion title="👨‍💻 Área:" text={area} />
      <TextoDeLaSeccion title="↗️ Nivel de educación:" text={educationLevel} />
      <TextoDeLaSeccion title="📅 Fecha:" text={`${startDate} - ${endDate}`} />
    </>
  );
}
