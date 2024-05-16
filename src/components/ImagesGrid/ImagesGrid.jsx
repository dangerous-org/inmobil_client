import PropTypes from "prop-types";

const ImagesGrid = ({ images }) => {
  const getGridItemStyle = (index) => {
    let style = {};
    if (index < images.length - 1) {
      style = {
        gridColumn: `span ${index % 2 === 0 ? 1 : 2}`,
        gridRow: `span ${index < 2 ? 1 : 2}`,
      };
    } else {
      style = {
        gridColumn: "1 / -1",
        gridRow: `span ${Math.ceil(images.length / 2)}`,
      };
    }
    return style;
  };
  console.log(images);
  return (
    <div className="grid grid-cols-2 gap-4">
      {images && images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="w-full h-full object-cover"
          style={getGridItemStyle(index)}
        />
      ))}
    </div>
  );
};

export default ImagesGrid;

ImagesGrid.propTypes = {
  images: PropTypes.array,
};
