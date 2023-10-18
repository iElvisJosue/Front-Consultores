/* eslint-disable react/prop-types */
// COMPONENTES A USAR
import TituloDeLaSeccion from "../global/TituloDeLaSeccion";

export default function PerfilDelConsultorInformacionProyectosDisponibles({
  projectsAvailable,
  amountProjects,
}) {
  return (
    <div className="Main__Profile__Information--Content--ProjectsAvailable">
      <TituloDeLaSeccion>
        Proyectos Disponibles: {amountProjects} ✨
      </TituloDeLaSeccion>
      {projectsAvailable.map(
        ({ nameProject, areaProject, timeProject, paymentProject }, index) => (
          <div
            className="Main__Profile__Information--Content--ProjectsAvailable--Container"
            key={index}
          >
            <div className="Main__Profile__Information--Content--ProjectsAvailable--Container--Details">
              <picture className="Main__Profile__Information--Content--ProjectsAvailable--Container--Details--Picture">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                  alt="Foto Del Cliente"
                />
              </picture>
              <div className="Main__Profile__Information--Content--ProjectsAvailable--Container--Details--Info">
                <p className="Main__Profile__Information--Content--ProjectsAvailable--Container--Details--Name">
                  {nameProject}
                </p>
                <p className="Main__Profile__Information--Content--ProjectsAvailable--Container--Details--Area">
                  <strong>🛠️ Area:</strong> {areaProject}
                </p>
                <p className="Main__Profile__Information--Content--ProjectsAvailable--Container--Details--Time">
                  <strong>🕰️ Tiempo estimado:</strong> {timeProject}
                </p>
                <p className="Main__Profile__Information--Content--ProjectsAvailable--Container--Details--Payment">
                  <strong>💰 Pago:</strong> ${paymentProject}
                </p>
              </div>
            </div>
            <span className="Main__Profile__Information--Content--ProjectsAvailable--Container--Button">
              <button>Más Detalles</button>
            </span>
          </div>
        )
      )}
    </div>
  );
}
