/* eslint-disable react/prop-types */

// ESTILOS A USAR
import "../../../styles/webapp/TituloDeLaSeccion.css";
export default function TituloDeLaSeccion({
  id = "",
  editable = false,
  deleted = false,
  title = true,
  changeMenu,
  nameMenu,
  setElementID,
  setShowModalDelete,
  setTypeElementDelete,
  children,
}) {
  const showNewMenu = () => {
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
        {editable && (
          <button
            className="Main__Profile__Information--TitleSection--Container--Button"
            onClick={showNewMenu}
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
