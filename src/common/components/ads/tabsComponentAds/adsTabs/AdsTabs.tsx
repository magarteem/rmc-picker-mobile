import { useOutletContext } from "react-router-dom";
import { InitialStateAdsType } from "../../../../../modules/ads/types/adsSliceType";
import { InitialStateUserType } from "../../../../../modules/user/types/userSliceType";
import { RibbonLayout } from "../../../../layout/ribbonLayout/RibbonLayout";
import { PreLoader } from "../../../preLoader/PreLoader";
import { AnnouncementFeed } from "../../announcementFeed/AnnouncementFeed";
import { ResponseAdsType } from "../../../../../modules/ads/types/responseAdsType";
import { InButton } from "../../../../ui-elements/button/InButton";

export const AdsTabs = () => {
  const [dataAdsList, profile, isLoadingAds, isFetchingAds, setPageFu, refetchFu, dataAds]: [
    InitialStateAdsType,
    InitialStateUserType,
    boolean,
    boolean,
    () => void,
    () => void,
    ResponseAdsType
  ] = useOutletContext();

  if (isLoadingAds) return <PreLoader />;

  return (
    <RibbonLayout setPageFu={setPageFu} isFetching={isFetchingAds}>
      {dataAds?.results.length > 0 && dataAds?.results.map((x) => <AnnouncementFeed x={x} profile={profile} key={x.id} />)}

      {dataAds?.results.length === 0 && !isFetchingAds && (
        <InButton textButton="Ничего не найдено. Назад" isValidInButton={false} onClick={refetchFu} />
      )}
    </RibbonLayout>
  );
};
