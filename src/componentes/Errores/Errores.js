import propTypes from "prop-types";
import { Error } from "./Error";
export const Errores = (props) => {
  const { erroresFormulario } = props;
  return (
    <div className="row">
      <div className="col-12">
        <ul>
          {erroresFormulario.map((error) => (
            <Error key={error} error={error}></Error>
          ))}
        </ul>
      </div>
    </div>
  );
};
Errores.propTypes = {
  erroresFormulario: propTypes.array.isRequired,
};
