import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { NextUIProvider } from "@nextui-org/react";
import authStore from "./store/authStore";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
function App() {
  const authenticateUser = authStore((state) => state.authenticateUser);

  useEffect(() => {
    const checkAuthentication = async () => {
      await authenticateUser();
    };
    checkAuthentication();
  }, [authenticateUser]);
  

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <NextUIProvider>
        <Router>
          <AppRoutes />
        </Router>
      </NextUIProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
