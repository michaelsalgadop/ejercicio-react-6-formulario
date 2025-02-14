import propTypes from "prop-types";
export const Paso1 = (props) => {
  const { datos, setDato, getAnyos, anyo } = props;

  return (
    <div id="paso-1">
      <h2 className="titulo-paso text-center">Paso 1: Datos personales.</h2>
      <div className="row">
        <div className="form-group col-12 col-md-6">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="form-control"
            value={datos.nombre}
            onChange={setDato}
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            className="form-control"
            value={datos.apellidos}
            onChange={setDato}
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <div className="input-group align-items-center">
            <input
              type="date"
              name="fechaNacimiento"
              id="fechaNacimiento"
              className="form-control"
              value={datos.fechaNacimiento}
              onChange={(evento) => {
                setDato(evento);
                getAnyos(evento);
              }}
            />
            <span className="ml-1">{anyo} años</span>
          </div>
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            id="correo"
            className="form-control"
            value={datos.correo}
            onChange={setDato}
          />
        </div>
      </div>
    </div>
  );
};
Paso1.propTypes = {
  datos: propTypes.object.isRequired,
  setDato: propTypes.func.isRequired,
  getAnyos: propTypes.func.isRequired,
  anyo: propTypes.number,
};
