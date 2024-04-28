import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";

const UserInput = ({ onChange, value }) => {
  return (
    <Input
      name="userName"
      size="sm"
      type="text"
      label="UserName"
      value={value}
      autoComplete="off"
      className="mb-6 mt-3"
      onChange={onChange}
    />
  );
};

export default UserInput;

UserInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
