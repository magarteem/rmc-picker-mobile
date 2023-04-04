import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import filterIconsNew from "../assets/icons/filterIconsNew.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import { Outlet, useLocation } from "react-router-dom";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { TabsComponentAds } from "../common/components/ads/tabsComponentAds/TabsComponentAds";
import { useAppDispatch, useAppSelector } from "../core/redux/app/hooks";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { FilterModalLayout } from "../common/layout/filterModalLayout/FilterModalLayout";
import { FilterFormsAds } from "../modules/ads/FilterFormsAds";
import { RouteNames } from "../core/router/RouteNames";
import { AdsFilterParamsRequestType, VacancyFilterParamsRequestType } from "../modules/vacancy/types/FilterFormsAdsFieldsType";
import { ResponseAdsType } from "../modules/ads/types/responseAdsType";
import { adsQuery, useListAdsQuery, useListVacancyQuery } from "../modules/vacancy/adsQuery";
import { getMyProfileQuery, useListAccountQuery } from "../modules/user/getGetMyProfileQuery";
import { FilterSearchAllFormsType } from "../modules/user/types/filterSearchAllFormsType";
import { ResponseSearchAllFormsType } from "../modules/user/types/responseSearchAllForms";
import s from "./styles/adsAll.module.scss";

export const AdsAll = () => {
  const dispatch = useAppDispatch();
  let location = useLocation().pathname;
  const adsData = useAppSelector((state) => state.adsSliceReducer);
  const myProfile = useAppSelector((state) => state.userSliceReducer.profileData);
  const filter = { img: filterIconsNew, action: location };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // VACANCY
  const [pageCountCheck, setPageCountCheck] = useState(0);
  const [pageCountCheckAds, setPageCountCheckAds] = useState(0);

  //! --- ADS -------------------------------
  const storeListAds = useAppSelector((state) => state.adsQuery.queries.listAds?.data) as ResponseAdsType;
  const [pageparamsAds, setPageparamsAds] = useState<AdsFilterParamsRequestType>({
    page: 0,
  });

  const rulesPathAds = location !== `${RouteNames.ADS}/${RouteNames.ADS_LIST}`;
  // const rulesPagesAds = storeListAds?.pageCount < storeListAds?.currentPage + 1;
  // const rulesPages1Ads =
  //  storeListAds?.currentPage > pageparamsAds.page &&
  //  storeListAds?.pageCount === storeListAds?.currentPage + 1;
  //  skip: rulesPathAds || rulesPagesAds || rulesPages1Ads,

  const {
    data: dataAds,
    isLoading: isLoadingAds,
    isFetching: isFetchingAds,
  } = useListAdsQuery(pageparamsAds, {
    skip: rulesPathAds,
  });

  //! --- ACCOUNT -------------------------------
  const storeListAccount = useAppSelector((state) => state.getMyProfileQuery.queries.listAccount?.data) as ResponseSearchAllFormsType;
  const [pageparamsAccount, setPageparamsAccount] = useState<FilterSearchAllFormsType>({
    page: 0,
  });

  const rulesPathAcc = location !== `${RouteNames.ADS}/${RouteNames.ADS_QUESTIONNAIRE_LIST}`;
  // const rulesPagesACc = storeListAccount?.pageCount < storeListAccount?.currentPage + 1;
  // const rulesPages1Acc = storeListAccount?.currentPage > pageparamsAccount.page;
  // skip: rulesPathAcc || rulesPagesACc || rulesPages1Acc,

  const {
    data: dataA,
    isLoading: isLoadingAccount,
    isFetching: isFetchingAccount,
  } = useListAccountQuery(pageparamsAccount, {
    skip: rulesPathAcc,
  });

  //! --- VACANCY -------------------------------
  const storeListVacancy = useAppSelector((state) => state.adsQuery.queries.listVacancy?.data) as ResponseAdsType;

  const [pageparamsVacancy, setPageparamsVacancy] = useState<VacancyFilterParamsRequestType>({
    page: 0,
  });

  const rulesPath = location !== `${RouteNames.ADS}`;
  // const rulesPages = storeListVacancy?.pageCount < storeListVacancy?.currentPage + 1;
  // const rulesPages1 = storeListVacancy?.currentPage > pageparamsVacancy.page;

  const {
    data: dataV,
    isLoading: isLoadingVacancy,
    isFetching: isFetchingVacansy,
  } = useListVacancyQuery(pageparamsVacancy, {
    skip: rulesPath,
  });

  const setPageFu = (params: AdsFilterParamsRequestType | VacancyFilterParamsRequestType | FilterSearchAllFormsType) => {
    if (location === `${RouteNames.ADS}`) {
      if (params) {
        setPageparamsVacancy({
          ...params,
        });
      } else if (dataV && dataV.pageCount > storeListVacancy.currentPage + 1 && pageparamsVacancy.page !== 0) {
        storeListVacancy &&
          setPageparamsVacancy({
            ...pageparamsVacancy,
            page: dataV.currentPage + 1,
          });
      } else if (storeListVacancy && storeListVacancy.pageCount > storeListVacancy.currentPage + 1) {
        setPageparamsVacancy({
          ...pageparamsVacancy,
          page: storeListVacancy.currentPage + 1,
        });
      } else {
        console.log("stop 1 ");
      }
    } else if (location === `${RouteNames.ADS}/${RouteNames.ADS_LIST}`) {
      if (params) {
        setPageparamsAds({
          ...params,
        });
      } else if (dataAds && dataAds.pageCount > storeListAds.currentPage + 1 && pageparamsAds.page !== 0) {
        storeListAds &&
          setPageparamsAds({
            ...pageparamsAds,
            page: dataAds.currentPage + 1,
          });
      } else if (storeListAds && storeListAds.pageCount > storeListAds.currentPage + 1) {
        setPageparamsAds({
          ...pageparamsAds,
          page: storeListAds.currentPage + 1,
        });
      } else {
        console.log("stop 2 ");
      }
    } else {
      if (params) {
        setPageparamsAccount({
          ...params,
        });
      } else if (dataA && dataA?.pageCount > storeListAccount?.currentPage + 1 && pageparamsAccount.page !== 0) {
        storeListAccount &&
          setPageparamsAccount({
            ...pageparamsAccount,
            page: dataA.currentPage + 1,
          });
      } else if (storeListAccount && storeListAccount.pageCount > storeListAccount.currentPage + 1) {
        setPageparamsAccount({
          ...pageparamsAccount,
          page: storeListAccount.currentPage + 1,
        });
      } else {
        console.log("stop 3 ");
      }
    }
  };

  //! ----------------------------------

  const refetchFu = () => {
    if (location === `${RouteNames.ADS}`) {
      dispatch(
        adsQuery.util.updateQueryData("listVacancy", undefined, (draft: ResponseAdsType) => {
          draft.pageCount = 1;
          draft.currentPage = 0;
          draft.results.length = 0;
        })
      );
      // pageCountCheck === 0 &&
      setPageparamsVacancy({
        page: 0,
        pageSize: 6,
      });
    } else if (location === `${RouteNames.ADS}/${RouteNames.ADS_LIST}`) {
      dispatch(
        adsQuery.util.updateQueryData("listAds", undefined, (draft: ResponseAdsType) => {
          draft.pageCount = 1;
          draft.currentPage = 0;
          draft.results.length = 0;
        })
      );
      // pageCountCheckAds === 0 &&
      setPageparamsAds({
        page: 0,
        pageSize: 6,
      });
    } else {
      dispatch(
        getMyProfileQuery.util.updateQueryData("listAccount", undefined, (draft: ResponseSearchAllFormsType) => {
          draft.pageCount = 1;
          draft.currentPage = 0;
          draft.results.length = 0;
        })
      );
      setPageparamsAccount({
        page: 0,
        pageSize: 6,
      });
    }
  };

  useEffect(() => {
    const elem = document.body;
    open && elem.classList.add("cssGlobalHTML");
    //@ts-ignore
    open && elem.parentNode.classList.add("cssGlobalHTML");

    return () => {
      elem.classList.remove("cssGlobalHTML");
      //@ts-ignore
      elem.parentNode.classList.remove("cssGlobalHTML");
    };
  }, [open]);

  return (
    <>
      <StylesFullScreen>
        <div className={s.customAddPadding}>
          <HeaderStylesWrapper anyIconsFirst={filter} onClickAnyIconsFirst={handleClickOpen}>
            <div className={s.styleInput}>
              <div className={s.sizeInput}>
                <TextField
                  placeholder="Поиск"
                  sx={{
                    width: "100% !important",
                    fontWeight: "700  !important",
                    fontSize: "16px",
                    color: "#242424 ",
                    fontFamily: `Mulish_Regular, sans-serif !important`,
                    padding: "0",
                    height: "100% !important",

                    "& .Mui-focused": {
                      color: "#1A1C18 !important",
                    },

                    "& .MuiInputBase-root": {
                      height: "100%",
                      borderRadius: "12px",
                      backgroundColor: "#E9F0DA",

                      "& input": {
                        color: "#1A1C18",
                        padding: "0 14px 0 48px  !important",
                        fontFamily: `Mulish_Regular, sans-serif !important`,
                        fontSize: "16px !important",
                        fontWeight: "600 !important",
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #C6D1B8",
                        borderRadius: "8px",
                      },
                    },
                  }}
                />
              </div>
              <img src={searchIcon} alt="search" />
            </div>
          </HeaderStylesWrapper>
        </div>
      </StylesFullScreen>

      <TabsComponentAds />

      <StylesFullScreen>
        <Outlet
          context={[
            adsData,
            myProfile,
            isLoadingAds,
            isFetchingAds,
            setPageFu,
            refetchFu,
            dataAds ?? storeListAds,
            isLoadingVacancy,
            isFetchingVacansy,
            dataV ?? storeListVacancy,
            dataA ?? storeListAccount,
            isLoadingAccount,
            isFetchingAccount,
          ]}
        />

        <FilterModalLayout
          style={{
            "& .MuiDialog-container": {
              alignItems: "flex-end",

              "& .MuiPaper-root": {
                background: "#FDFDF5",
                borderRadius: "28px 28px 0px 0px",
                width: "100%",
                margin: 0,
                padding: "16px",
              },
            },
          }}
          modalOpen={open}
          handleClose={handleClose}
        >
          <FilterFormsAds handleClose={handleClose} setPageFu={setPageFu} />
        </FilterModalLayout>
      </StylesFullScreen>
    </>
  );
};

// const setPageFu1 = (params?: AdsFilterParamsRequestType | VacancyFilterParamsRequestType) => {
//  if (location === `${RouteNames.ADS}`) {
//   // console.log("11");
//   if (params) {
//    console.log("1", params);
//    setPageparamsVacancy(params);
//   } else if (storeListVacancy && storeListVacancy?.currentPage < storeListVacancy?.pageCount) {
//    setPageparamsVacancy({
//     page: storeListVacancy?.currentPage + 1,
//    });
//   } else {
//    //console.log("stop");
//   }
//  } else {
//   // console.log("22");
//   if (params) {
//    //console.log("2", params);
//    setPageparams(params);
//   } else if (storeListAds && storeListAds?.currentPage < storeListAds?.pageCount) {
//    setPageparams({
//     page: storeListAds?.currentPage + 1,
//    });
//   } else {
//    //console.log("stop");
//   }
//  }
// };
