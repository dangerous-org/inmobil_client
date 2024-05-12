import PropTypes from "prop-types";
import RightArrowIcon from "./svg/RightArrowIcon";
import "./Carrousel.css";
const RightArrow = ({ setCurrentImgIndex, currentImgIndex, imagesLength }) => {
  const handleClick = () => {
    if (currentImgIndex === imagesLength - 1) {
      setCurrentImgIndex(0);
      return;
    }
    setCurrentImgIndex(currentImgIndex + 1);
  };

  return (
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
