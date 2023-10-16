import "../../../styles/webapp/ButtonSubmit.css";

/* eslint-disable react/prop-types */
export default function ButtonSubmit({
  isDisabled = false,
  addElement = false,
  changeMenu,
  nameMenu,
  text = "Siguiente",
}) {
  const classButtonSubmit = isDisabled
    ? "Main__Form--ButtonSubmit Disabled"
    : "Main__Form--ButtonSubmit";

  return (
    <>
      {addElement ? (
        <button
          type="submit"
          className={classButtonSubmit}
          onClick={() => changeMenu(nameMenu)}
        >
          {text}
        </button>
      ) : (
        <button type="submit" className={classButtonSubmit}>
          {text}
        </button>
      )}
    </>
  );
}
