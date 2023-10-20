/* eslint-disable react/prop-types */
// HOOKS A USAR
import useDataDelete from "../../../hooks/consultor/useDataDelete";
import useProjectDelete from "../../../hooks/cliente/useProjectDelete";

// ESTILOS A USAR
import "../../../styles/webapp/ModalEliminar.css";
export default function ModalEliminar({
  setShowModalDelete,
  classModalDelete,
  setElementID,
  elementID,
  typeElementDelete,
  setTypeElementDelete,
  setCheckCV,
  checkCV,
  setCheckClient,
  checkClient,
}) {
  const {
    deleteExperience,
    deleteStudy,
    deleteArea,
    deleteLanguage,
    deleteSkill,
    handleDelete,
  } = useDataDelete({
    setElementID,
    setCheckCV,
    checkCV,
  });
  const { deleteProject, handleProject } = useProjectDelete({
    setElementID,
    setCheckClient,
    checkClient,
  });

  const optionsDelete = {
    CVAdministrarExperiencia: () => handleDelete(elementID, deleteExperience),
    CVAdministrarEducacion: () => handleDelete(elementID, deleteStudy),
    CVAdministrarArea: () => handleDelete(elementID, deleteArea),
    CVAdministrarHabilidad: () => handleDelete(elementID, deleteSkill),
    CVAdministrarIdioma: () => handleDelete(elementID, deleteLanguage),
    ProyectosAdministrar: () => handleProject(elementID, deleteProject),
  };

  const deleteElement = () => {
    optionsDelete[typeElementDelete]();
    closeModalDelete();
  };

  const closeModalDelete = () => {
    setShowModalDelete(false);
    setTypeElementDelete(null);
    setElementID(null);
  };

  return (
    <div className={classModalDelete}>
      <div className="Main__ModalDelete--Content">
        <p className="Main__ModalDelete--Content--Title">
          CONFIRMAR ELIMINACIÓN
        </p>
        <picture className="Main__ModalDelete--Content--Picture">
          <img src="./Eliminar.png" alt="Eliminar Elemento" />
        </picture>
        <p className="Main__ModalDelete--Content--Description">
          ¿Estás seguro de que deseas eliminar este elemento? Esta acción no se
          puede deshacer y todos los datos relacionados se perderán de forma
          permanente. Por favor, confirma tu elección para proceder.
        </p>
        <span className="Main__ModalDelete--Content--Buttons">
          <button
            className="Main__ModalDelete--Content--Buttons--Cancel"
            onClick={closeModalDelete}
          >
            Cancelar
          </button>
          <button
            className="Main__ModalDelete--Content--Buttons--Confirm"
            onClick={deleteElement}
          >
            Confirmar
          </button>
        </span>
      </div>
    </div>
  );
}
