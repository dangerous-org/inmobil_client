import PropTypes from "prop-types";

const FooterControl = ({ images, setCurrentImgIndex }) => {
  return (
    <div className="flex-1 flex justify-center mx-auto gap-4">
      {images.map((image, index) => {
        return (
          <img
            src={image}
            alt=""
            key={image}
            className="w-[50px] h-[40px] object-cover hover:cursor-pointer"
            onClick={() => setCurrentImgIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default FooterControl;

FooterControl.propTypes = {
  images: PropTypes.array,
  setCurrentImgIndex: PropTypes.func,
};
