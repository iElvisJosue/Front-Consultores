/* eslint-disable react/prop-types */
// ESTILOS A USAR
import "../../../styles/webapp/BackSection.css";

export default function BackSection({
  children,
  changeMenu,
  title = false,
  imgUrl = false,
  imgAlt = "Descripción de la imagen",
}) {
  return (
    <header className="Main__Form--BackSection">
      <button
        className="Main__Form--BackSection--Button"
        onClick={() => changeMenu("CV")}
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
        {children}
      </button>
      {imgUrl && (
        <img
          src={imgUrl}
          alt={imgAlt}
          className="Main__Form--BackSection--Img"
        />
      )}
      {title && <h2 className="Main__Form--BackSection--Title">{title}</h2>}
      <hr className="Main__Form--BackSection--Divisor" />
    </header>
  );
}
