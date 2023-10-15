/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import ButtonSubmit from "../global/ButtonSubmit";
import SinInformacion from "../global/SinInformacion";

export default function PerfilDelConsultorInformacionCVIdiomas({
  consultantLanguages,
}) {
  return (
    <div className="Main__Profile__Information--Content--CVResume">
      <TituloDeLaSeccion>Idiomas 🌍</TituloDeLaSeccion>
      {consultantLanguages.length > 0 ? (
        consultantLanguages.map(
          ({ _id, nameLanguage, levelLanguage }, index) => (
            <TituloDeLaSeccion
              title={false}
              key={index}
              deleted={true}
              id={_id}
            >
              {nameLanguage} - {levelLanguage}
            </TituloDeLaSeccion>
          )
        )
      ) : (
        <SinInformacion />
      )}
      <ButtonSubmit text="Agregar nuevo idioma" />
    </div>
  );
}
