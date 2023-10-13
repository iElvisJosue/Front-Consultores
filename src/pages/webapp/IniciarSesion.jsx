// LIBRERÍAS A USAR
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
// import { useNavigate } from "react-router-dom";

// CONTEXTOS A USAR
// import { useGlobal } from "../context/GlobalContext";

// COMPONENTES A USAR
import HeaderForm from "../../components/webapp/global/HeaderForm";
import ButtonSubmit from "../../components/webapp/global/ButtonSubmit";
import FooterForm from "../../components/webapp/global/FooterForm";

// HOOKS A USAR
import usePassword from "../../hooks/usePassword";

// AYUDAS A USAR
import { loginHeaderProps, loginInputsProps } from "../../helpers/login";
// import { handleResponseMessages } from "../../helpers/response";

// ESTILOS A USAR
import "../../styles/webapp/Login.css";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // const { login } = useGlobal();
  // const navigate = useNavigate();
  const { iconPassword } = usePassword();

  // const handleSuccessResponse = (res) => {
  //   toast.success(`¡Bienvenido ${res.userName}!`);
  //   setTimeout(() => navigate("/Perfil"), 1500);
  // };

  const checkDataLogin = handleSubmit(async (data) => {
    console.log(data);
    // try {
    //   const res = await login(data);
    //   if (res.response) {
    //     const { status, data } = res.response;
    //     handleResponseMessages({ status, data });
    //   } else {
    //     handleSuccessResponse(res);
    //   }
    // } catch (error) {
    //   const { status, data } = error.response;
    //   handleResponseMessages({ status, data });
    // }
  });

  return (
    <main className="Main__Login">
      <form onSubmit={checkDataLogin} className="Main__Login__Form">
        <HeaderForm {...loginHeaderProps} />
        {loginInputsProps.map(
          ({
            icon,
            inputType,
            inputName,
            messageError,
            placeholder,
            secondIcon = false,
          }) => (
            <>
              <div className="Main__Login__Form--ContainerInputs">
                <span className="Main__Login__Form--ContainerInputs--Icon">
                  <ion-icon name={icon}></ion-icon>
                </span>

                {secondIcon && iconPassword}
                {inputType === "text" ? (
                  <input
                    type={inputType}
                    {...register(inputName, { required: true })}
                    className="Main__Login__Form--ContainerInputs--Inputs"
                    placeholder={placeholder}
                  />
                ) : (
                  <input
                    type={inputType}
                    {...register(inputName, { required: true })}
                    className="Main__Login__Form--ContainerInputs--Inputs"
                    placeholder={placeholder}
                    id="password"
                  />
                )}
              </div>
              {errors[inputName] && (
                <small className="Main__Login__Form--SmallError">
                  {messageError}
                </small>
              )}
            </>
          )
        )}
        <ButtonSubmit text="Iniciar Sesión" />
        <FooterForm
          title="¿No tienes cuenta? Crea una:"
          optionOne="Consultor"
          optionTwo="Cliente"
        />
      </form>
      <Toaster richColors position="top-right" closeButton />
    </main>
  );
}
