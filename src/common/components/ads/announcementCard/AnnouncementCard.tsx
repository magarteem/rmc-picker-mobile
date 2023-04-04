import { Link } from "react-router-dom";
import { ResultAdsTypeResponse } from "../../../../modules/ads/types/responseAdsType";
import { BodyAds } from "../bodyAds/BodyAds";
import { HeaderAds } from "../headerAds/HeaderAds";

interface AnnouncementCardType {
 x: ResultAdsTypeResponse;
 link: string;
 options?: any;
}

export const AnnouncementCard = ({ x, link, options }: AnnouncementCardType) => {
 return (
  <>
   <HeaderAds x={x} link={link} options={options} />
   <Link to={link}>
    <BodyAds x={x} />
   </Link>
  </>
 );
};
