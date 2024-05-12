import PropTypes from "prop-types";
import LeftArrowIcon from "./svg/LeftArrowIcon";
import "./Carrousel.css";
const LeftArrow = ({ setCurrentImgIndex, currentImgIndex, imagesLength }) => {
  const handleClick = () => {
    if(currentImgIndex === 0){
      setCurrentImgIndex(imagesLength - 1);
      return;
    }
    setCurrentImgIndex(currentImgIndex - 1);
  };

  return(
    <button className="leftArrowButton" onClick={handleClick}>
      <LeftArrowIcon />
    </button>
  );
};

export default LeftArrow;

LeftArrow.propTypes = {
  setCurrentImgIndex: PropTypes.func.isRequired,
  currentImgIndex: PropTypes.number.isRequired,
  imagesLength: PropTypes.number.isRequired,
};
