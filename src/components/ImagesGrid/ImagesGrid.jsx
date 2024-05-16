import PropTypes from "prop-types";
import "./ImagesGrid.css";

const ImagesGrid = ({ images = [] }) => {

  let showedImages = images.slice(0, 4);

  return (
    <div className="img-grid">
      {showedImages &&
        showedImages.map((image) => {
          return (
            <figure key={image} id="img-container">
              <img src={image && image} alt="post image" id="post-img" />
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
