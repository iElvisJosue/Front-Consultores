import "../../../styles/website/QuieresSerUnConsultorPresentacion.css";

export default function QuieresSerUnConsultorPresentacion() {
  return (
    <div className="Main__Brown">
      <section className="Main__WantConsultant">
        <article className="Main__WantConsultant__Content">
          <div className="Main__WantConsultant__Content--Text">
            <p className="Main__WantConsultant__Content--Text--Title">
              ¿Quieres ser un consultor?
            </p>
            <p className="Main__WantConsultant__Content--Text--SubTitle">
              “En Consultor-ES podrás elegir tus proyectos, llegar a más
              clientes y contar con un equipo profesional que te apoyará en todo
              momento” Conviértete en parte de nuestros socios como consultor
              experto dando de alta tu CV.
            </p>
            <a href="#" className="Main__WantConsultant__Content--Text--Button">
              <p className="Main__WantConsultant__Content--Text--Button--Text">
                Código del consultor
              </p>
            </a>
          </div>
          <picture className="Main__WantConsultant__Content--Image"></picture>
        </article>
      </section>
    </div>
  );
}
