import { Input } from "@nextui-org/react";

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
