/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";
import DetallesDeLaExperiencia from "../global/DetallesDeLaExperiencia";
import ButtonSubmit from "../global/ButtonSubmit";
import SinInformacion from "../global/SinInformacion";

export default function PerfilDelConsultorInformacionCVExperiencia({
  consultantExperience,
  changeMenu,
  nameMenu,
  setElementID,
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
            changeMenu={changeMenu}
            nameMenu={nameMenu}
            setElementID={setElementID}
          />
        ))
      ) : (
        <SinInformacion />
      )}
      <ButtonSubmit
        changeMenu={changeMenu}
        nameMenu={nameMenu}
        addElement={true}
        text="Agregar Nueva Experiencia"
      />
    </div>
  );
}
