import { useEffect } from "react";
import authStore from "../store/authStore";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

const ProtectedRoutes = () => {
  const isAuthenticated = authStore((state) => state.isAuthenticated);
  const user = authStore((state) => state.user);
  const authenticateUser = authStore((state) => state.authenticateUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await authenticateUser();
      setLoading(false);
    };
    checkAuthentication();
  }, [authenticateUser]);

  if (loading) return <p>Loading ...</p>;

  if (!isAuthenticated && user == null)
    return <Navigate to={"/auth/sign-in"} replace />;
  return <Outlet />;
};

export default ProtectedRoutes;
