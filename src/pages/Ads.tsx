import { useAppSelector } from "../core/redux/app/hooks";
import { Outlet } from "react-router-dom";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import { PreLoader } from "../common/components/preLoader/PreLoader";

export const Ads = () => {
 const adsData = useAppSelector((state) => state.adsQuery.queries);
 const { allMyForms, profileData } = useAppSelector((state) => state.userSliceReducer);

 if (adsData.isLoading) return <PreLoader />;
 if (adsData.error) return <h1>Error</h1>;

 return (
  <>
   <Outlet context={[adsData, profileData, allMyForms]} />
   <PopUpNavigateGradient />
  </>
 );
};
