// ESTILOS A USAR
import "../../../styles/webapp/SinInformacion.css";
export default function SinInformacion() {
  return (
    <div className="Main__WithoutInfo">
      <picture className="Main__WithoutInfo--Picture">
        <img src="./SinInformacion.png" alt="Sin información" />
      </picture>
      <p className="Main__WithoutInfo--Text">¡Sin información!</p>
    </div>
  );
}
