import { Navigate, Outlet } from "react-router-dom";
import authStore from "../store/authStore";
const ProtectedRoutes = () => {
  const isAuthenticated = authStore((state) => state.isAuthenticated);
  const user = authStore((state) => state.user);

  if (!isAuthenticated && user == null)
    return <Navigate to={"/auth/sign-in"} replace />;
  return <Outlet />;
};

export default ProtectedRoutes;
