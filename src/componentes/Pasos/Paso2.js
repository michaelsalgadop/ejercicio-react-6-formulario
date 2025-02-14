import propTypes from "prop-types";
export const Paso2 = (props) => {
  const { datos, setDatoPorEvento } = props;
  return (
    <div id="paso-2">
      <h2 className="titulo-paso text-center">Paso 2: Datos de acceso.</h2>
      <div className="row">
        <div className="form-group col-12 col-md-6">
          <label htmlFor="nombreUsuario">Nombre de usuario</label>
          <input
            type="text"
            name="nombreUsuario"
            id="nombreUsuario"
            className="form-control"
            value={datos.nombreUsuario}
            onChange={setDatoPorEvento}
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="contrasenya">Contraseña</label>
          <input
            type="password"
            name="contrasenya"
            id="contrasenya"
            className="form-control"
            value={datos.contrasenya}
            onChange={setDatoPorEvento}
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="repetirContrasenya">Repetir contraseña</label>
          <input
            type="password"
            name="repetirContrasenya"
            id="repetirContrasenya"
            className="form-control"
            value={datos.repetirContrasenya}
            onChange={setDatoPorEvento}
          />
        </div>
      </div>
    </div>
  );
};
Paso2.propTypes = {
  datos: propTypes.object.isRequired,
  setDatoPorEvento: propTypes.func.isRequired,
};
