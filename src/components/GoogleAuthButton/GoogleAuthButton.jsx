import { GoogleLogin } from "@react-oauth/google";
import authStore from "../../store/authStore";

const GoogleAuthButton = () => {
  const googleAuth = authStore((state) => state.googleAuth);
  const setIsAuthenticated = authStore((state) => state.setIsAuthenticated);

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          await googleAuth(credentialResponse);
          setIsAuthenticated(true);
        } catch (error) {
          alert(error, " => google button");
          setIsAuthenticated(false);
        }
      }}
      onError={() => alert("Error =>")}
      useOneTap
    />
  );
};

export default GoogleAuthButton;
