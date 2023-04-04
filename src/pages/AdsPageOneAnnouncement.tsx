import { useParams } from "react-router-dom";
import { AdsPageOneGlobal } from "../common/components/ads/adsPageOne/AdsPageOneGlobal";
import { PreLoader } from "../common/components/preLoader/PreLoader";
import { useOneAnnouncementPostQuery } from "../modules/vacancy/adsQuery";

export const AdsPageOneAnnouncement = () => {
 const { id_ads } = useParams();
 const { data, isLoading } = useOneAnnouncementPostQuery(id_ads || "", {
  skip: !id_ads,
 });

 if (!data || isLoading) return <PreLoader />;

 return <AdsPageOneGlobal data={data} />;
};
