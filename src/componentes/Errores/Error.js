import propTypes from "prop-types";
export const Error = (props) => {
  const { error } = props;
  return <li className="error">{error}</li>;
};
Error.propTypes = {
  error: propTypes.string.isRequired,
};
