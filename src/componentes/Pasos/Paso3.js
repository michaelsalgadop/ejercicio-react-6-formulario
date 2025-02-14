import propTypes from "prop-types";
export const Paso3 = (props) => {
  const { datos, setDatoPorEvento } = props;
  return (
    <div id="paso-3">
      <h2 className="titulo-paso text-center">Paso 3: Login.</h2>
      <div className="row">
        <div className="form-group col-12 col-md-6">
          <label htmlFor="nombreUsuarioLogin">Nombre de usuario</label>
          <input
            type="text"
            name="nombreUsuarioLogin"
            id="nombreUsuarioLogin"
            className="form-control"
            value={datos.nombreUsuarioLogin}
            onChange={setDatoPorEvento}
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="contrasenyaLogin">Contraseña</label>
          <input
            type="password"
            name="contrasenyaLogin"
            id="contrasenyaLogin"
            className="form-control"
            value={datos.contrasenyaLogin}
            onChange={setDatoPorEvento}
          />
        </div>
        <div className="form-check col-12 col-md-6">
          <input
            type="checkbox"
            name="recordarContrasenya"
            id="recordarContrasenya"
            className="mr-1"
            checked={datos.recordarContrasenya}
            onChange={setDatoPorEvento}
          />
          <label htmlFor="recordarContrasenya">Recordar contraseña</label>
        </div>
      </div>
    </div>
  );
};
Paso3.propTypes = {
  datos: propTypes.object.isRequired,
  setDatoPorEvento: propTypes.func.isRequired,
};
