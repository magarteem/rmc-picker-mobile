import { useOutletContext } from "react-router-dom";
import { InitialStateAdsType } from "../../../../../modules/ads/types/adsSliceType";
import { InitialStateUserType } from "../../../../../modules/user/types/userSliceType";
import { RibbonLayout } from "../../../../layout/ribbonLayout/RibbonLayout";
import { PreLoader } from "../../../preLoader/PreLoader";
import { AnnouncementFeed } from "../../announcementFeed/AnnouncementFeed";
import { ResponseAdsType } from "../../../../../modules/ads/types/responseAdsType";
import { InButton } from "../../../../ui-elements/button/InButton";

export const VacancyTabs = () => {
 const [
  dataAdsList,
  profile,
  isLoadingAds,
  isFetchingAds,
  setPageFu,
  refetchFu,
  dataAds,
  isLoadingVacancy,
  isFetchingVacansy,
  dataVacancy,
 ]: [
  InitialStateAdsType,
  InitialStateUserType,
  boolean,
  boolean,
  () => void,
  () => void,
  ResponseAdsType,
  boolean,
  boolean,
  ResponseAdsType
 ] = useOutletContext();

 if (isLoadingVacancy) return <PreLoader />;

 return (
  <RibbonLayout setPageFu={setPageFu} isFetching={isFetchingVacansy}>
   {dataVacancy?.results.length > 0 &&
    dataVacancy?.results.map((x) => <AnnouncementFeed x={x} profile={profile} key={x.id} />)}

   {dataVacancy?.results.length === 0 && !isFetchingVacansy && (
    <InButton textButton="Ничего не найдено. Назад" isValidInButton={false} onClick={refetchFu} />
   )}

   {/*{dataVacancy?.results.length > 0 ? (
    dataVacancy?.results.map((x) => <AnnouncementFeed x={x} profile={profile} key={x.id} />)
   ) : (
    <InButton textButton="Ничего не найдено. Назад" isValidInButton={false} onClick={refetchFu} />
   )}*/}
  </RibbonLayout>
 );
};

//isFetchingVacansy ? null :
