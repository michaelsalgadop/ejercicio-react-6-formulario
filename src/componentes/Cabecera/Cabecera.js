import propTypes from "prop-types";
export const Cabecera = (props) => {
  const { paso } = props;
  return (
    <header>
      <span
        className={`rellene-formulario ${
          paso > 3 ? "invisible" : ""
        } text-center w-100`}
      >
        Rellene el siguiente formulario con su información:
      </span>
    </header>
  );
};
Cabecera.propTypes = {
  paso: propTypes.number.isRequired,
};
