/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";
const SubmitButton = ({ text }) => {
  return (
    <Button
      type="submit"
      variant="flat"
      className="w-full h-11 bg-redDefault text-white rounded-md "
    >
      {text}
    </Button>
  );
};

SubmitButton.prototype = {
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
