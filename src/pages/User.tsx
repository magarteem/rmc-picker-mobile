import { Outlet } from "react-router-dom";
import { useAppSelector } from "../core/redux/app/hooks";

export const User = () => {
  const data = useAppSelector((state) => state.userSliceReducer);

  return <Outlet context={data} />;
};
