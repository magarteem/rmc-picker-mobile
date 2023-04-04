import { useParams } from "react-router-dom";
import { AdsPageOneGlobal } from "../common/components/ads/adsPageOne/AdsPageOneGlobal";
import { PreLoader } from "../common/components/preLoader/PreLoader";
import { useOneVacancyPostQuery } from "../modules/vacancy/adsQuery";

export const AdsPageOneVacancy = () => {
 const { id_ads } = useParams();
 const { data, isLoading } = useOneVacancyPostQuery(id_ads || "", {
  skip: !id_ads,
 });

 if (!data || isLoading) return <PreLoader />;

 return <AdsPageOneGlobal data={data} />;
};
