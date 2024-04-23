import { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../icons/EyeFilled";
import { EyeSlashFilledIcon } from "../icons/EyeIcon";

const PasswordInput = ({onChange, value}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      name="password"
      size="sm"
      label="Password"
      className="mb-6 mt-3"
      autoComplete="off"
      value={value}
      onChange={onChange}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
};
export default PasswordInput;
