import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../core/redux/app/hooks";
import { RouteNames } from "../../../core/router/RouteNames";
import { getThisPageURL } from "../../../helpers/getThisPageURL";
import { OptionLongMenuType } from "../../timeLine/types/timlineSliceType";
import { useDeleteAdsMutation, useDeleteVacancyMutation } from "../../vacancy/adsQuery";
import { ResultAdsTypeResponse } from "../types/responseAdsType";

export const useOptionsLongMenu = (id: string) => {
  const options: OptionLongMenuType[] = [
    {
      label: "Редактировать1",
      link: `${RouteNames.ADS}/${RouteNames.ADS_CHANGE_THIS_ADS}/${id}`,
      action: () => {},
    },
    {
      label: "Скопировать ссылку1",
      link: "",
      action: () => getThisPageURL(),
    },
  ];

  return options;
};

export const useOptionsLongMenu1 = (data: ResultAdsTypeResponse) => {
  const { allMyForms } = useAppSelector((state) => state.userSliceReducer);
  const [deleteVacancy] = useDeleteVacancyMutation();
  const [deleteAds] = useDeleteAdsMutation();

  const deleteThisADS = () => {
    data.conditions ? deleteVacancy(data.id) : deleteAds(data.id);
    //navigate(-1);
  };

  const complain = () => (window.location.href = "mailto:support@3-tone.ru");
  const changeThisNews = () => <Navigate to={RouteNames.CHANGE_THIS_NEWS} />;

  let options: OptionLongMenuType[] = [
    {
      label: "Скопировать ссылку",
      link: "",
      action: () => getThisPageURL(),
    },
  ];

  if (allMyForms.includes(data.form.formId)) {
    options = [
      {
        label: "Редактировать",
        link: `${RouteNames.ADS}/${RouteNames.ADS_CHANGE_THIS_ADS}/${data.id}`,
        action: changeThisNews,
      },
      {
        label: "Удалить",
        link: data.conditions ? RouteNames.ADS : `${RouteNames.ADS}/${RouteNames.ADS_LIST}`,
        action: deleteThisADS,
      },
      ...options,
    ];
  } else {
    options = [
      ...options,
      {
        label: "Пожаловаться",
        link: "",
        action: complain,
      },
    ];
  }

  return options;
};
