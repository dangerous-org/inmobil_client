import PropTypes from "prop-types";
import { Button } from "@nextui-org/react";
import utilStore from "../../store/utilStore";
import "./ImagesGrid.css";

const ImagesGrid = ({ images = [] }) => {

  let showedImages = images.slice(0, 4);
  const openPostModalCarrousel = utilStore((state) => state.openPostModalCarrousel);
  const setSelectedImage = utilStore((state) => state.setSelectedImage);
  const setDropMenuDisabled = utilStore((state) => state.setDropMenuDisabled);
  const setSelectedImageIndex = utilStore(
    (state) => state.setSelectedImageIndex
  );

  const handleImageClick = (index) => {
    setSelectedImage(images);
    setDropMenuDisabled(true);
    setSelectedImageIndex(index);
    openPostModalCarrousel();
  };

  const handleButtonClick = () => {
    setSelectedImage(images);
    setDropMenuDisabled(true);
    setSelectedImageIndex(0);
    openPostModalCarrousel();
  };

  return (
    <div className="img-grid" role="contentinfo">
      {showedImages &&
        showedImages.map((image, index) => {
          return (
            <figure key={image} id="img-container" aria-label="image">
              <img
                src={image && image}
                alt="post image"
                id="post-img"
                onClick={() => {
                  handleImageClick(index);
                }}
              />
              {index == 3 && images.length > 4 ? (
                <Button id="see-photos" onClick={handleButtonClick}>
                  See All Photos
                </Button>
              ) : null}
            </figure>
          );
        })}
    </div>
  );
};

export default ImagesGrid;

ImagesGrid.propTypes = {
  images: PropTypes.array,
};
