import { Navigate, Outlet } from "react-router-dom";
import { RouteNames } from "./RouteNames";

interface ProtectedRouteType {
  auth: boolean;
}

export const ProtectedRoute = ({ auth }: ProtectedRouteType) => {
  return auth ? <Outlet /> : <Navigate to={RouteNames.LOGIN} replace />;
};
