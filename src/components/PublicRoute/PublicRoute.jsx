import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";

export const PublicRoute = () => {
  const location = useLocation()
  console.log(location);
  const accessToken = useSelector((state) => state.auth.access_token);
  return !accessToken ? <Outlet /> : <Navigate to={location.state.fromLogin ?? "/articles"} replace={true} />;
};
