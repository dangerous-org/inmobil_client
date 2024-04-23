import { BrowserRouter as Router } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <NextUIProvider>
      <Router>
        <AppRoutes />
      </Router>
    </NextUIProvider>
  );
}

export default App;
