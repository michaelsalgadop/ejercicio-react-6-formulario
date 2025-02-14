import { useEffect, useState } from "react";
import { Cabecera } from "./componentes/Cabecera/Cabecera";
import { Errores } from "./componentes/Errores/Errores";
import { Botones } from "./componentes/Botonera/Botones";
import { Paso1 } from "./componentes/Pasos/Paso1";
import { Paso2 } from "./componentes/Pasos/Paso2";
import { Paso3 } from "./componentes/Pasos/Paso3";
import { Paso4 } from "./componentes/Pasos/Paso4";
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
  const setDatoPorEvento = (e) => {
    const elemento = e.target;
    setDatos({
      ...datos,
      [elemento.id]:
        elemento.type === "checkbox" ? elemento.checked : elemento.value,
    });
  };
  const setDatoPorFuncion = (callback) => setDatos(callback);
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
  const [anyo, setAnyo] = useState(null);
  const getAnyos = (event) => {
    const valorFecha = event.target.value;
    const fechaNacimiento = DateTime.fromISO(valorFecha);
    if (fechaNacimiento > DateTime.now() || !fechaNacimiento.isValid) {
      /** Pasamos prevDatos, que podríamos poner lo que quisieramos, porque
       * puede que no se actualize el estado correctamente si datos aún
       * no ha sido actualizado en ese render. */
      setDatoPorFuncion((prevDatos) => ({
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
  const [erroresFormulario, setErroresFormulario] = useState([]);
  const checkFormulario = comprobarFormulario();

  return (
    <>
      <Cabecera paso={paso}></Cabecera>
      <main className="contenedor-principal container-fluid">
        {paso < 4 && (
          <form>
            <div className="pasos">
              {paso === 1 && (
                <Paso1
                  datos={datos}
                  setDato={setDatoPorEvento}
                  getAnyos={getAnyos}
                  anyo={anyo}
                ></Paso1>
              )}
              {paso === 2 && (
                <Paso2
                  datos={datos}
                  setDatoPorEvento={setDatoPorEvento}
                ></Paso2>
              )}
              {paso === 3 && (
                <Paso3
                  datos={datos}
                  setDatoPorEvento={setDatoPorEvento}
                ></Paso3>
              )}
            </div>
            {erroresFormulario.length > 0 && (
              <Errores erroresFormulario={erroresFormulario}></Errores>
            )}
            <Botones
              paso={paso}
              setPaso={setPaso}
              validarCampos={validarCampos}
              checkFormulario={checkFormulario}
            ></Botones>
          </form>
        )}
        {paso === 4 && <Paso4 datos={datos}></Paso4>}
      </main>
    </>
  );
}

export default App;
