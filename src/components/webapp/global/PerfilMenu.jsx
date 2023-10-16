/* eslint-disable react/prop-types */

// CONTEXTOS A USAR
import { useGlobal } from "../../../context/GlobalContext";

// COMPONENTES A USAR
import PerfilMenuConsultor from "./PerfilMenuConsultor";

// ESTILOS A USAR
import "../../../styles/webapp/Menu.css";

export default function PerfilMenu({ setElementID, changeMenu, menu }) {
  const { user } = useGlobal();
  const { userName, role } = user;

  const profileMenu = {
    Consultor: (
      <PerfilMenuConsultor
        setElementID={setElementID}
        changeMenu={changeMenu}
        menu={menu}
      />
    ),
    //   Cliente: <PerfilMenuCliente />,
    //   Administrador: <PerfilMenuAdmin />,
  };

  return (
    <aside className="Main__Profile__Information--Menu">
      <div className="Main__Profile__Information--Menu--Profile">
        <picture className="Main__Profile__Information--Menu--Profile--Picture">
          <img src="./CEO.png" alt="Imagen de perfil" />
        </picture>
        <p className="Main__Profile__Information--Menu--Profile--Name">
          {userName}
        </p>
      </div>
      {profileMenu[role]}
    </aside>
  );
}
