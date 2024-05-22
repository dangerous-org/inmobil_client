import PropTypes from "prop-types";

const FooterControl = ({ images, setCurrentImgIndex }) => {
  return (
    <div className="flex justify-center mx-auto gap-4">
      {images.map((image, index) => {
        return (
          <img
            src={image}
            alt=""
            key={image}
            className="w-[50px] h-[35px] mt-1 object-cover hover:cursor-pointer"
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
