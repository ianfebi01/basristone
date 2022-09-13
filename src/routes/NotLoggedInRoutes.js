import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Home from "../pages/home";

export default function NotLoggedInRoutes() {
  const { user } = useSelector((state) => ({ ...state }));

  return user ? <Home /> : <Outlet />;
}
