import "../../../styles/website/PreguntanosFormulario.css";

export default function PreguntanosFormulario() {
  const contentInputs = [
    {
      icon: "person-outline",
      placeholder: "Nombre (s)",
      type: "text",
      maxLength: "100",
    },
    {
      icon: "person-outline",
      placeholder: "Apellidos",
      type: "text",
      maxLength: "100",
    },
    {
      icon: "call-outline",
      placeholder: "Teléfono",
      type: "text",
      maxLength: "18",
    },
    {
      icon: "mail-outline",
      placeholder: "Correo",
      type: "email",
      maxLength: "50",
    },
    {
      icon: "business-outline",
      placeholder: "Empresa",
      type: "text",
      maxLength: "100",
    },
  ];

  return (
    <div className="Main__Brown">
      <section className="Main__AskUs__Form">
        <div className="Main__AskUs__Form--Presentation">
          <p className="Main__AskUs__Form--Presentation--Title">
            Vas a contactar con el equipo de Consultor-Es.
          </p>
          <p className="Main__AskUs__Form--Presentation--Subtitle">
            Te ayudaremos a encontrar lo que necesitas.
          </p>
        </div>
        <form
          className="Main__AskUs__Form--Form"
          onClick={(e) => e.preventDefault()}
        >
          {contentInputs.map(
            ({ icon, placeholder, type, maxLength }, index) => (
              <div
                className="Main__AskUs__Form--Form--ContainerInputs"
                key={index}
              >
                <span className="Main__AskUs__Form--Form--ContainerInputs--Icon">
                  <ion-icon name={icon}></ion-icon>
                </span>
                <input
                  type={type}
                  className="Main__AskUs__Form--Form--ContainerInputs--Inputs"
                  placeholder={placeholder}
                  maxLength={maxLength}
                />
              </div>
            )
          )}
          <textarea
            cols="10"
            rows="10"
            maxLength={2500}
            className="Main__AskUs__Form--Form--ContainerInputs--Inputs textArea"
            placeholder="¿En qué podemos ayudarte? Escribe aquí."
          ></textarea>
          <button className="Main__AskUs__Form--Form--Button">
            <p className="Main__AskUs__Form--Form--Button--Text">Enviar</p>
          </button>
        </form>
      </section>
    </div>
  );
}
