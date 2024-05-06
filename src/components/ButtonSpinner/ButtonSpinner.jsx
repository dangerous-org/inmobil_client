import PropTypes from "prop-types";
import { Spinner } from "@nextui-org/react";
import postStore from "../../store/postStore";
const ButtonSpinner = ({ text }) => {
  const isLoading = postStore((state) => state.isLoading);
  return isLoading ? (
    <Spinner label="Loading" color="secondary" size="sm" />
  ) : (
    <button
      type="submit"
      className="w-full h-11 bg-lilaDefault text-white rounded-md"
    >
      {text}
    </button>
  );
};

export default ButtonSpinner;

ButtonSpinner.propTypes = {
  text: PropTypes.string.isRequired,
};
