import { Link } from "react-router-dom";

const ButtonSign = () => {
  return (
    <Link
      className="px-6 py-2 rounded-md bg-lilaDefault absolute right-4 text-white"
      to={"/auth/sign-in"}
    >
      Sign In
    </Link>
  );
};

export default ButtonSign;
