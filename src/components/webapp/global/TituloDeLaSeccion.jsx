/* eslint-disable react/prop-types */

// ESTILOS A USAR
import "../../../styles/webapp/TituloDeLaSeccion.css";
export default function TituloDeLaSeccion({
  id = "",
  editable = false,
  deleted = false,
  completed = false,
  title = true,
  changeMenu,
  nameMenu,
  setElementID,
  setShowModalDelete,
  setTypeElementDelete,
  children,
}) {
  const editElement = () => {
    setElementID(id);
    changeMenu(nameMenu);
  };

  const completeElement = () => {
    setElementID(id);
    changeMenu(nameMenu);
  };
  const deleteElement = () => {
    setElementID(id);
    setShowModalDelete(true);
    setTypeElementDelete(nameMenu);
  };

  const classTitleSection = title
    ? "Main__Profile__Information--TitleSection"
    : "Main__Profile__Information--TitleSection SemiTitle";

  return (
    <p className={classTitleSection}>
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
