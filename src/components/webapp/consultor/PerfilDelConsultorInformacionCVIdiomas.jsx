/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import ButtonSubmit from "../global/ButtonSubmit";
import SinInformacion from "../global/SinInformacion";

export default function PerfilDelConsultorInformacionCVIdiomas({
  consultantLanguages,
  changeMenu,
  nameMenu,
  setElementID,
  setShowModalDelete,
  setTypeElementDelete,
}) {
  return (
    <div className="Main__Profile__Information--Content--CVLanguages">
      <TituloDeLaSeccion>Idiomas 🌍</TituloDeLaSeccion>
      {consultantLanguages.length > 0 ? (
        consultantLanguages.map(
          ({ _id, nameLanguage, levelLanguage }, index) => (
            <TituloDeLaSeccion
              id={_id}
              key={index}
              setElementID={setElementID}
              setShowModalDelete={setShowModalDelete}
              setTypeElementDelete={setTypeElementDelete}
              nameMenu={nameMenu}
              title={false}
              deleted={true}
            >
              {nameLanguage} - {levelLanguage}
            </TituloDeLaSeccion>
          )
        )
      ) : (
        <SinInformacion>¡No cuentas con idiomas!</SinInformacion>
      )}
      <ButtonSubmit
        addElement={true}
        changeMenu={changeMenu}
        nameMenu={nameMenu}
        text="Agregar Nuevo Idioma"
      />
    </div>
  );
}
