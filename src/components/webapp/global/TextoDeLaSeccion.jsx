/* eslint-disable react/prop-types */

// ESTILOS A USAR
import "../../../styles/webapp/TextoDeLaSeccion.css";
export default function TextoDeLaSeccion({
  title = "Titulo de la sección:",
  text,
}) {
  return (
    <p className="Main__Profile__Information--TextSection">
      <strong>{title}</strong> {text}
    </p>
  );
}
