import "../../../styles/webapp/ButtonSubmit.css";

/* eslint-disable react/prop-types */
export default function ButtonSubmit({
  isDisabled = false,
  text = "Siguiente",
}) {
  const classButtonSubmit = isDisabled
    ? "Main__Form--ButtonSubmit Disabled"
    : "Main__Form--ButtonSubmit";

  return (
    <button type="submit" className={classButtonSubmit}>
      {text}
    </button>
  );
}
