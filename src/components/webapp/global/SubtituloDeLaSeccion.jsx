/* eslint-disable react/prop-types */

// ESTILOS A USAR
import "../../../styles/webapp/TituloDeLaSeccion.css";
export default function SubtituloDeLaSeccion({
  id = "",
  changeMenu,
  nameMenu,
  setElementID,
  setShowModalDelete,
  setTypeElementDelete,
  children,
  completed = true,
  editable = true,
  deleted = true,
}) {
  const editElement = () => {
    setElementID(id);
    changeMenu(nameMenu);
  };

  const completeElement = () => {
    setElementID(id);
  };
  const deleteElement = () => {
    setElementID(id);
    setShowModalDelete(true);
    setTypeElementDelete(nameMenu);
  };

  return (
    <p className="Main__Profile__Information--TitleSection SemiTitle">
      {children}
      <span className="Main__Profile__Information--TitleSection--Container">
        {completed && (
          <button
            className="Main__Profile__Information--TitleSection--Container--Button"
            onClick={completeElement}
          >
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </button>
        )}
        {editable && (
          <button
            className="Main__Profile__Information--TitleSection--Container--Button"
            onClick={editElement}
          >
            <ion-icon name="color-wand-outline"></ion-icon>
          </button>
        )}
        {deleted && (
          <button
            className="Main__Profile__Information--TitleSection--Container--Button"
            onClick={deleteElement}
          >
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        )}
      </span>
    </p>
  );
}
