import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import CarrouselFooter from "./CarrouselFooter";
import "./Carrousel.css";
import FooterControl from "./FooterControl";

const Carrousel = ({ images = [], index = 0, footerControl = false }) => {
  const [currentImg, setCurrentImg] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(index);

  useEffect(() => {
    setCurrentImg(images[currentImgIndex]);
  }, [currentImgIndex, currentImg, images]);

  return (
    <figure className="carrousel">
      <LeftArrow
        setCurrentImgIndex={setCurrentImgIndex}
        currentImgIndex={currentImgIndex}
        imagesLength={images.length}
      />
      <img alt="img" src={currentImg} className="carrousel-images" />
      <RightArrow
        setCurrentImgIndex={setCurrentImgIndex}
        currentImgIndex={currentImgIndex}
        imagesLength={images.length}
      />
      <CarrouselFooter
        currentImgIndex={currentImgIndex}
        imagesLength={images.length}
      />
      {footerControl ? (
        <FooterControl
          images={images}
          setCurrentImgIndex={setCurrentImgIndex}
        />
      ) : null}
    </figure>
  );
};

export default Carrousel;

Carrousel.propTypes = {
  images: PropTypes.array,
  index: PropTypes.number,
  footerControl: PropTypes.bool,
};
