/* eslint-disable react/prop-types */
// LIBRERÍAS A USAR
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// CONTEXTOS A USAR
import { useConsultant } from "../../../context/ConsultantContext";

// COMPONENTES A USAR
import ButtonSubmit from "../global/ButtonSubmit";
import BackSection from "../global/BackSection";

// AYUDAS A USAR
import { resumeInformationData } from "../../../helpers/PerfilDelConsultorAgregarCV";
import { handleResponseMessages } from "../../../helpers/Respuestas";

// HOOKS A USAR
import useDisabled from "../../../hooks/useDisabled";

// ESTILOS A USAR
import "../../../styles/webapp/PerfilDelConsultorInformacionCVResumeEditar.css";
export default function PerfilDelConsultorInformacionCVResumeEditar({
  consultantInformation,
  changeMenu,
  setCheckCV,
  checkCV,
}) {
  const { updateResume } = useConsultant();
  const { isDisabled, submitDisabled } = useDisabled();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    if (consultantInformation) {
      setValue(
        "profession",
        consultantInformation.data.consultantResume.profession
      );
      setValue(
        "description",
        consultantInformation.data.consultantResume.description
      );
    }
  }, []);

  const updateResumeConsultant = handleSubmit(async (data) => {
    submitDisabled();
    try {
      const res = await updateResume(data);
      if (res.response) {
        const { status, data } = res.response;
        handleResponseMessages({ status, data });
      } else {
        const { status, data } = res;
        handleResponseMessages({ status, data });
        setCheckCV(!checkCV);
        changeMenu("CV");
      }
    } catch (error) {
      const { status, data } = error.response;
      handleResponseMessages({ status, data });
    }
  });

  const backSectionHeaderProps = {
    imgUrl: "./ResumenProfesional.png",
    imgAlt: "Resumen Profesional",
    title: "Editar Resumen Profesional 📑",
    changeMenu,
  };

  return (
    <form
      className="Main__Profile__Information--Content--CVResume--Edit"
      onSubmit={updateResumeConsultant}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
    >
      <BackSection {...backSectionHeaderProps}>Regresar</BackSection>
      {resumeInformationData.map(
        ({ icon, inputType, inputName, placeholder, validator }, index) => (
          <>
            <p className="Main__Profile__Information--Content--CVResume--Edit--TitleInput">
              {placeholder}:
            </p>
            <div className="Main__Profile__Information--Content--CVResume--Edit--ContainerInputs">
              <span className="Main__Profile__Information--Content--CVResume--Edit--ContainerInputs--Icon">
                <ion-icon name={icon}></ion-icon>
              </span>

              {index === 0 ? (
                <input
                  type={inputType}
                  {...register(inputName, validator)}
                  className="Main__Profile__Information--Content--CVResume--Edit--ContainerInputs--Inputs"
                  placeholder={placeholder}
                />
              ) : (
                <textarea
                  type={inputType}
                  {...register(inputName, validator)}
                  className="Main__Profile__Information--Content--CVResume--Edit--ContainerInputs--Inputs Textarea"
                  placeholder={placeholder}
                />
              )}
            </div>
            <ErrorMessage
              errors={errors}
              name={inputName}
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <small
                    key={type}
                    className="Main__Profile__Information--Content--CVResume--Edit--SmallError"
                  >
                    {message}
                  </small>
                ))
              }
            />
          </>
        )
      )}
      <ButtonSubmit isDisabled={isDisabled} text="Actualizar Resumen" />
    </form>
  );
}
