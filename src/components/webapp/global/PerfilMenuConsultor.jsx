/* eslint-disable react/prop-types */

// AYUDAS A USAR
import { menuOptions } from "../../../helpers/PerfilMenuConsultor";

// HOOKS A USAR
import useLogout from "../../../hooks/useLogout";

// ESTILOS A USAR
import "../../../styles/webapp/MenuConsultor.css";

export default function PerfilMenuConsultor({
  setElementID,
  changeMenu,
  menu,
}) {
  const { closingSession } = useLogout();

  return (
    <ul className="Main__Profile__Information--MenuConsultant--Options">
      {menuOptions.map((option) => (
        <li
          key={option.label}
          className={`Main__Profile__Information--MenuConsultant--Options--Item ${
            menu === option.label ? "Active" : ""
          }`}
          onClick={() => {
            changeMenu(option.label), setElementID(null);
          }}
        >
          <ion-icon name={option.icon}></ion-icon> {option.text}
        </li>
      ))}
      <li
        className="Main__Profile__Information--MenuConsultant--Options--Item"
        onClick={closingSession}
      >
        <ion-icon name="log-out-outline"></ion-icon> Cerrar Sesión
      </li>
    </ul>
  );
}
