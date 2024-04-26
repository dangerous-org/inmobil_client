import { Input } from "@nextui-org/react";
import PropTypes from 'prop-types'

const EmailInput = ({onChange, value}) => {
  return (
    <Input
      name="email"
      size="sm"
      type="email"
      label="Email"
      value={value}
      autoComplete="off"
      className="mb-6 mt-3"
      onChange={onChange}
    />
  );
};

export default EmailInput;

EmailInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}