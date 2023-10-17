/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import ButtonSubmit from "../global/ButtonSubmit";
import SinInformacion from "../global/SinInformacion";

export default function PerfilDelConsultorInformacionCVAreas({
  consultantAreas,
  changeMenu,
  nameMenu,
  setElementID,
  setShowModalDelete,
  setTypeElementDelete,
}) {
  return (
    <div className="Main__Profile__Information--Content--CVResume">
      <TituloDeLaSeccion>Areas de especialidad 🛠️</TituloDeLaSeccion>
      {consultantAreas.length > 0 ? (
        consultantAreas.map(({ _id, nameArea }, index) => (
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
            {nameArea}
          </TituloDeLaSeccion>
        ))
      ) : (
        <SinInformacion />
      )}
      <ButtonSubmit
        changeMenu={changeMenu}
        nameMenu={nameMenu}
        addElement={true}
        text="Agregar Nueva Especialidad"
      />
    </div>
  );
}
