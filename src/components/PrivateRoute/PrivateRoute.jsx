import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const accessToken = useSelector((state) => state.auth.access_token);
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};
