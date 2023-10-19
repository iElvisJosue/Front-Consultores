/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import ButtonSubmit from "../global/ButtonSubmit";
import SinInformacion from "../global/SinInformacion";

export default function PerfilDelConsultorInformacionCVHabilidades({
  consultantSkills,
  changeMenu,
  nameMenu,
  setElementID,
  setShowModalDelete,
  setTypeElementDelete,
}) {
  return (
    <div className="Main__Profile__Information--Content--CVAbilities">
      <TituloDeLaSeccion>Habilidades Personales 🎲</TituloDeLaSeccion>
      {consultantSkills.length > 0 ? (
        consultantSkills.map(({ _id, nameSkill }, index) => (
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
            {nameSkill}
          </TituloDeLaSeccion>
        ))
      ) : (
        <SinInformacion>¡No cuentas con habilidades personales!</SinInformacion>
      )}
      <ButtonSubmit
        addElement={true}
        changeMenu={changeMenu}
        nameMenu={nameMenu}
        text="Agregar Nueva Habilidad"
      />
    </div>
  );
}
