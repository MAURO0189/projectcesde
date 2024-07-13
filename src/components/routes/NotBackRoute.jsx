import { Navigate, Outlet } from "react-router-dom";

function NotBackRoute() {
  const user = localStorage.getItem("user");
  if (user) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}

export default NotBackRoute;
