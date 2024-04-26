import PropTypes from "prop-types";
import RightArrowIcon from "./svg/RightArrowIcon";
import "./Carrousel.css";
const RightArrow = ({ setCurrentImgIndex, currentImgIndex, imagesLength }) => {
  const handleClick = () => {
    setCurrentImgIndex(currentImgIndex + 1);
  };

  return currentImgIndex === imagesLength - 1 ? null : (
    <button className="rightArrowButton" onClick={handleClick}>
      <RightArrowIcon />
    </button>
  );
};

export default RightArrow;

RightArrow.propTypes = {
  setCurrentImgIndex: PropTypes.func.isRequired,
  currentImgIndex: PropTypes.number.isRequired,
  imagesLength: PropTypes.number.isRequired,
};
