import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const loggedId = false;

  return loggedId ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
