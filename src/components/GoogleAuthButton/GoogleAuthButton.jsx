import { GoogleLogin } from "@react-oauth/google";
import authStore from "../../store/authStore";

const GoogleAuthButton = () => {
  const googleAuth = authStore((state) => state.googleAuth);

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          await googleAuth(credentialResponse.credential);
        } catch (error) {
          alert(error, " => google button");
        }
      }}
      onError={() => alert("Error =>")}
      useOneTap
    />
  );
};

export default GoogleAuthButton;
