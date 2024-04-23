import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button
        variant="flat"
        className="w-[30%] mt-4 h-11 bg-redDefault text-white rounded-md "
        onClick={goBack}
      >
        {" "}
        Go Back
      </Button>
    </div>
  );
};

export default NotFoundPage;
