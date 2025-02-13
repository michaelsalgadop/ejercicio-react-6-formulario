import { useEffect, useState } from "react";
import { DateTime, Interval } from "luxon";

function App() {
  const [paso, setPaso] = useState(1);
  const [datos, setDatos] = useState({
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    correo: "",
    nombreUsuario: "",
    contrasenya: "",
    repetirContrasenya: "",
    nombreUsuarioLogin: "",
    contrasenyaLogin: "",
    recordarContrasenya: false,
  });
  const [anyo, setAnyo] = useState(null);
  const setDato = (e) => {
    const elemento = e.target;
    setDatos({
      ...datos,
      [elemento.id]:
        elemento.type === "checkbox" ? elemento.checked : elemento.value,
    });
  };
  const getAnyos = (event) => {
    const valorFecha = event.target.value;
    const fechaNacimiento = DateTime.fromISO(valorFecha);
    if (fechaNacimiento > DateTime.now() || !fechaNacimiento.isValid) {
      /** Pasamos prevDatos, que podríamos poner lo que quisieramos, porque
       * puede que no se actualize el estado correctamente si datos aún
       * no ha sido actualizado en ese render. */
      setDatos((prevDatos) => ({
        ...prevDatos,
        fechaNacimiento: "", // Limpia el campo solo si la fecha es inválida
      }));
      return setAnyo(null);
    }
    const { years: anyosQueTienes } = Interval.fromDateTimes(
      fechaNacimiento,
      DateTime.now()
    )
      .toDuration(["years"])
      .toObject();
    setAnyo(Math.floor(anyosQueTienes));
  };
  const comprobarFormulario = () => {
    const {
      nombre,
      apellidos,
      fechaNacimiento,
      correo,
      nombreUsuario,
      contrasenya,
      repetirContrasenya,
      nombreUsuarioLogin,
      contrasenyaLogin,
    } = datos;
    return (
      (paso === 1 && (!nombre || !apellidos || !fechaNacimiento || !correo)) ||
      (paso === 2 && (!nombreUsuario || !contrasenya || !repetirContrasenya)) ||
      (paso === 3 && (!nombreUsuarioLogin || !contrasenyaLogin))
    );
  };
  const validarCampos = () => {
    try {
      const errores = [];
      if (paso === 2) {
        if (datos.contrasenya !== datos.repetirContrasenya)
          errores.push("Las contraseñas no coinciden!");
      } else if (paso === 3) {
        if (datos.nombreUsuario !== datos.nombreUsuarioLogin)
          errores.push("El nombre de usuario no coincide con el introducido!");
        if (datos.contrasenya !== datos.contrasenyaLogin)
          errores.push("La contraseña no coincide con la introducida!");
      }
      setErroresFormulario(errores);
      return errores.length === 0;
    } catch (error) {
      console.error(error.message);
    }
  };
  const [erroresFormulario, setErroresFormulario] = useState([]);
  const [checkFormulario, setCheckFormulario] = useState(false);
  useEffect(() => {
    setCheckFormulario(comprobarFormulario());
  }, [datos, paso]);

  return (
    <>
      <header>
        <span
          className={`rellene-formulario ${
            paso > 3 ? "invisible" : ""
          } text-center w-100`}
        >
          Rellene el siguiente formulario con su información:
        </span>
      </header>
      <main className="contenedor-principal container-fluid">
        {paso < 4 && (
          <form>
            <div className="pasos">
              {paso === 1 && (
                <div id="paso-1">
                  <h2 className="titulo-paso text-center">
                    Paso 1: Datos personales.
                  </h2>
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
                      <label htmlFor="fechaNacimiento">
                        Fecha de nacimiento
                      </label>
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
              )}
              {paso === 2 && (
                <div id="paso-2">
                  <h2 className="titulo-paso text-center">
                    Paso 2: Datos de acceso.
                  </h2>
                  <div className="row">
                    <div className="form-group col-12 col-md-6">
                      <label htmlFor="nombreUsuario">Nombre de usuario</label>
                      <input
                        type="text"
                        name="nombreUsuario"
                        id="nombreUsuario"
                        className="form-control"
                        value={datos.nombreUsuario}
                        onChange={setDato}
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
                        onChange={setDato}
                      />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label htmlFor="repetirContrasenya">
                        Repetir contraseña
                      </label>
                      <input
                        type="password"
                        name="repetirContrasenya"
                        id="repetirContrasenya"
                        className="form-control"
                        value={datos.repetirContrasenya}
                        onChange={setDato}
                      />
                    </div>
                  </div>
                </div>
              )}
              {paso === 3 && (
                <div id="paso-3">
                  <h2 className="titulo-paso text-center">Paso 3: Login.</h2>
                  <div className="row">
                    <div className="form-group col-12 col-md-6">
                      <label htmlFor="nombreUsuarioLogin">
                        Nombre de usuario
                      </label>
                      <input
                        type="text"
                        name="nombreUsuarioLogin"
                        id="nombreUsuarioLogin"
                        className="form-control"
                        value={datos.nombreUsuarioLogin}
                        onChange={setDato}
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
                        onChange={setDato}
                      />
                    </div>
                    <div className="form-check col-12 col-md-6">
                      <input
                        type="checkbox"
                        name="recordarContrasenya"
                        id="recordarContrasenya"
                        className="mr-1"
                        checked={datos.recordarContrasenya}
                        onChange={setDato}
                      />
                      <label htmlFor="recordarContrasenya">
                        Recordar contraseña
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {erroresFormulario.length > 0 && (
              <div className="row">
                <div className="col-12">
                  <ul>
                    {erroresFormulario.map((error) => (
                      <li key={error} className="error">
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <div className="row">
              <div className="botones col-12 d-flex justify-content-center align-items-center p-b-md">
                {paso === 2 && (
                  <button
                    type="button"
                    className="btn-paso-anterior btn btn-secondary"
                    onClick={() => setPaso(paso - 1)}
                  >
                    Anterior
                  </button>
                )}
                {paso <= 3 && (
                  <button
                    type="button"
                    className={`btn ${
                      paso === 3 ? "btn-success" : "btn-primary"
                    }`}
                    onClick={() => {
                      if (validarCampos()) {
                        setPaso(paso + 1);
                      }
                    }}
                    disabled={checkFormulario}
                  >
                    {paso === 3 ? "Acceder" : "Siguiente"}
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
        {paso === 4 && (
          <div id="paso-4">
            <h2 className="titulo-paso text-center">Recogida de datos</h2>
            <p>
              Tu nombre es: <span className="negrita">{datos.nombre}</span>
            </p>
            <p>
              Tus apellidos: <span className="negrita">{datos.apellidos}</span>
            </p>
            <p>
              Tu fecha de nacimiento:{" "}
              <span className="negrita">{datos.fechaNacimiento}</span>
            </p>
            <p>
              Tu correo: <span className="negrita">{datos.correo}</span>
            </p>
            <p>
              Tu nombre de usuario:{" "}
              <span className="negrita">{datos.nombreUsuario}</span>
            </p>
            <p>
              Tu contrasenya:{" "}
              <span className="negrita">{datos.contrasenya}</span>
            </p>
            <p>
              <span className="negrita">
                {datos.recordarContrasenya ? "SÍ" : "NO"}
              </span>
              &nbsp;has querido recordar la contrasenya
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
