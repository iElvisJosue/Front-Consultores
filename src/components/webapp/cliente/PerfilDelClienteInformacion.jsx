/* eslint-disable react/prop-types */

// COMPONENTES A USAR
import ModalEliminar from "../global/ModalEliminar";
import PerfilMenu from "../global/PerfilMenu";
import PerfilDelClienteInformacionPerfil from "./PerfilDelClienteInformacionPerfil";
import PerfilDelClienteInformacionProyectos from "./PerfilDelClienteInformacionProyectos";
import PerfilDelClienteInformacionProyectosLista from "./PerfilDelClienteInformacionProyectosLista";
import PerfilDelClienteInformacionProyectosAdministrar from "./PerfilDelClienteInformacionProyectosAdministrar";

// HOOKS A USAR
import useMenu from "../../../hooks/useMenu";
import useID from "../../../hooks/useID";
import useModalDelete from "../../../hooks/consultor/useModalDelete";

// ESTILOS A USAR (SON LOS MISMOS QUE EL DEL CONSULTOR)
import "../../../styles/webapp/PerfilDelConsultorInformacion.css";

export default function PerfilDelClienteInformacion({
  clientInformation,
  setCheckClient,
  checkClient,
}) {
  const { changeMenu, menu } = useMenu();
  const {
    setShowModalDelete,
    classModalDelete,
    typeElementDelete,
    setTypeElementDelete,
  } = useModalDelete();
  const { elementID, setElementID } = useID();

  const clientProfileCommonProps = {
    clientInformation,
    setCheckClient,
    checkClient,
    changeMenu,
    menu,
    setElementID,
    elementID,
    setShowModalDelete,
    typeElementDelete,
    setTypeElementDelete,
  };

  const modalDeleteProps = {
    setElementID,
    elementID,
    setShowModalDelete,
    classModalDelete,
    typeElementDelete,
    setTypeElementDelete,
    setCheckClient,
    checkClient,
  };

  const profileOptionsToRender = {
    Perfil: PerfilDelClienteInformacionPerfil,
    Proyectos: PerfilDelClienteInformacionProyectos,
    ProyectosLista: PerfilDelClienteInformacionProyectosLista,
    ProyectosAdministrar: PerfilDelClienteInformacionProyectosAdministrar,
  };

  const ProfileSectionToRender = profileOptionsToRender[menu];

  return (
    <div className="Main__Profile__Information">
      <ModalEliminar {...modalDeleteProps} />
      <PerfilMenu
        setElementID={setElementID}
        changeMenu={changeMenu}
        menu={menu}
      />
      <section className="Main__Profile__Information--Content">
        <ProfileSectionToRender {...clientProfileCommonProps} />
      </section>
    </div>
  );
}
