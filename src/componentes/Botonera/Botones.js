import propTypes from "prop-types";
import { Boton } from "./Boton";
export const Botones = (props) => {
  const { paso, setPaso, validarCampos, checkFormulario } = props;
  return (
    <div className="row">
      <div className="botones col-12 d-flex justify-content-center align-items-center p-b-md">
        {paso === 2 && (
          <Boton
            accion={() => setPaso(paso - 1)}
            texto="Anterior"
            classes="btn-paso-anterior btn btn-secondary"
          ></Boton>
        )}
        {paso <= 3 && (
          <Boton
            accion={() => {
              if (validarCampos()) {
                setPaso(paso + 1);
              }
            }}
            checkFormulario={checkFormulario}
            texto={paso === 3 ? "Acceder" : "Siguiente"}
            classes={`btn ${paso === 3 ? "btn-success" : "btn-primary"}`}
          ></Boton>
        )}
      </div>
    </div>
  );
};
Botones.propTypes = {
  paso: propTypes.number.isRequired,
  setPaso: propTypes.func.isRequired,
  validarCampos: propTypes.func.isRequired,
  checkFormulario: propTypes.bool.isRequired,
};
