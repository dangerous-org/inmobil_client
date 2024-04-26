import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { NextUIProvider } from "@nextui-org/react";
import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <GoogleOAuthProvider clientId="814836190695-tpbaduo3d2ikak1d5ne3a0251qfo281n.apps.googleusercontent.com">
      <NextUIProvider>
        <Router>
          <AppRoutes />
        </Router>
      </NextUIProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
