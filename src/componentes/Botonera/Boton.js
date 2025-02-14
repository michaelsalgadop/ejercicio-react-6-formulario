import propTypes from "prop-types";
export const Boton = (props) => {
  const { accion, checkFormulario, texto, classes } = props;
  return (
    <button
      type="button"
      className={classes}
      onClick={accion}
      disabled={checkFormulario}
    >
      {texto}
    </button>
  );
};
Boton.propTypes = {
  accion: propTypes.func.isRequired,
  checkFormulario: propTypes.bool,
  texto: propTypes.string.isRequired,
  classes: propTypes.string.isRequired,
};
