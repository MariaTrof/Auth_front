import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store";
import { PATHS } from "@shared/config/routes";

export const AuthRoute = () => {
  const isAuth = useAuthStore((state) => state.isAuth);

  if (isAuth) {
    return <Navigate to={PATHS.PERSONAL} replace />;
  }

  return <Outlet />;
};
