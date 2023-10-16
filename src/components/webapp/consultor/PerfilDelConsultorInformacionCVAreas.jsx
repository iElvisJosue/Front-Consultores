/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import ButtonSubmit from "../global/ButtonSubmit";
import SinInformacion from "../global/SinInformacion";

export default function PerfilDelConsultorInformacionCVAreas({
  consultantAreas,
}) {
  return (
    <div className="Main__Profile__Information--Content--CVResume">
      <TituloDeLaSeccion>Areas de especialidad 🛠️</TituloDeLaSeccion>
      {consultantAreas.length > 0 ? (
        consultantAreas.map(({ _id, nameArea }, index) => (
          <TituloDeLaSeccion title={false} key={index} deleted={true} id={_id}>
            {nameArea}
          </TituloDeLaSeccion>
        ))
      ) : (
        <SinInformacion />
      )}
      <ButtonSubmit text="Agregar Nueva Area" />
    </div>
  );
}
