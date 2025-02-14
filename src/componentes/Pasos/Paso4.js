import propTypes from "prop-types";
export const Paso4 = (props) => {
  const { datos } = props;
  return (
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
        Tu contrasenya: <span className="negrita">{datos.contrasenya}</span>
      </p>
      <p>
        <span className="negrita">
          {datos.recordarContrasenya ? "SÍ" : "NO"}
        </span>
        &nbsp;has querido recordar la contrasenya
      </p>
    </div>
  );
};
Paso4.propTypes = {
  datos: propTypes.object.isRequired,
};
