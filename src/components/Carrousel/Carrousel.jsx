import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import CarrouselFooter from "./CarrouselFooter";
import "./Carrousel.css";
import FooterControl from "./FooterControl";

const Carrousel = ({ images = [], index = 0, footerControl = false }) => {
  const [currentImg, setCurrentImg] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(index);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
    const timeoutId = setTimeout(() => {
      setCurrentImg(images[currentImgIndex]);
      setIsFading(false);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [currentImgIndex, images]);

  return (
    <figure className="carrousel">
      <LeftArrow
        setCurrentImgIndex={setCurrentImgIndex}
        currentImgIndex={currentImgIndex}
        imagesLength={images.length}
      />
      <img
        alt="img"
        src={currentImg}
        className={`carrousel-images ${isFading ? "fade-out" : ""}`}
      />
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

Carrousel.propTypes = {
  images: PropTypes.array,
  index: PropTypes.number,
  footerControl: PropTypes.bool,
};

export default Carrousel;
