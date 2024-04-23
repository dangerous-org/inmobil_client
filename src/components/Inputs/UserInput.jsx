import { Input } from "@nextui-org/react";

const UserInput = ({onChange, value}) => {
  return (
    <Input
      name="username"
      size="sm"
      type="text"
      label="Username"
      value={value}
      autoComplete="off"
      className="mb-6 mt-3"
      onChange={onChange}
    />
  );
};

export default UserInput;
