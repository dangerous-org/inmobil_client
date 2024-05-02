import PropTypes from "prop-types";
const ClearIcon = ({ handleClear }) => {
  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      className="cursor-pointer"
      onClick={handleClear}
    >
      <path d="M8 8L16 16" stroke="#d69afc" strokeWidth="2" />
      <path d="M16 8L8 16" stroke="#d69afc" strokeWidth="2" />
    </svg>
  );
};

export default ClearIcon;

ClearIcon.propTypes = {
  handleClear: PropTypes.func.isRequired,
};
