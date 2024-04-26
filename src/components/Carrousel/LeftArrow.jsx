import PropTypes from "prop-types";
import LeftArrowIcon from "./svg/LeftArrowIcon";
import "./Carrousel.css";
const LeftArrow = ({ setCurrentImgIndex, currentImgIndex }) => {
  const handleClick = () => {
    setCurrentImgIndex(currentImgIndex - 1);
  };

  return currentImgIndex === 0 ? null : (
    <button className="leftArrowButton" onClick={handleClick}>
      <LeftArrowIcon />
    </button>
  );
};

export default LeftArrow;

LeftArrow.propTypes = {
  setCurrentImgIndex: PropTypes.func.isRequired,
  currentImgIndex: PropTypes.number.isRequired,
};
