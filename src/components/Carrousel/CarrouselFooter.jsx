import PropTypes from "prop-types";
import './Carrousel.css'
const CarrouselFooter = ({ currentImgIndex, imagesLength }) => {
  return (
    <footer className="carrouselFooter" aria-label="carrousel footer">
      <span className="carrouselFooterInfo">
        {currentImgIndex+1} / {imagesLength}
      </span>
    </footer>
  );
};

export default CarrouselFooter;

CarrouselFooter.propTypes = {
  currentImgIndex: PropTypes.number.isRequired,
  imagesLength: PropTypes.number.isRequired,
};
