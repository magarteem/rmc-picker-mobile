import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../core/redux/app/hooks";
import { getNewsListQuery, useInfinityScrollNewsQuery } from "../modules/timeLine/getNewsListQuery";
import { FilterParamsRequestType } from "../modules/timeLine/types/FilterFormsTimeLineFieldsType";
import { ResponseNewsType } from "../modules/timeLine/types/responseNewsType";

export const News = () => {
 const dispatch = useAppDispatch();
 const myProfileKey = useAppSelector((state) => state.userSliceReducer.allMyForms);
 const stopeListAds = useAppSelector(
  (state) => state.getNewsListQuery.queries.infinityScrollNews?.data
 ) as ResponseNewsType;

 const [pageCountCheck, setPageCountCheck] = useState(0);
 const [pageparams, setPageparams] = useState<FilterParamsRequestType>({
  page: 0,
 });

 const { data, isLoading, isFetching } = useInfinityScrollNewsQuery(pageparams, {
  skip: stopeListAds?.currentPage > pageparams.page,
 });

 const refetchFu = () => {
  dispatch(getNewsListQuery.util.resetApiState());
  pageCountCheck === 0 &&
   setPageparams({
    page: 0,
    query: undefined,
    type: undefined,
    cityIds: undefined,
    genreIds: undefined,
    instrumentIds: undefined,
   });
 };

 useEffect(() => {
  data && setPageCountCheck(data.pageCount);
 }, [data]);

 const setPageFu = (params: FilterParamsRequestType) => {
  if (
   typeof pageparams?.page === "number" &&
   data?.pageCount &&
   pageparams.page < data?.pageCount - 1
  ) {
   setPageparams({
    ...pageparams,
    ...params,
    page: params?.page === -1 ? params.page + 1 : pageparams.page + 1,
   });
  } else if (params) {
   setPageparams({
    ...params,
    page: 0,
   });
  } else if (
   stopeListAds?.currentPage > pageparams.page &&
   stopeListAds?.currentPage + 1 < stopeListAds?.pageCount
  ) {
   setPageparams({
    ...pageparams,
    page: stopeListAds?.currentPage + 1,
   });
  } else {
   console.log("stop");
  }
 };

 return (
  <Outlet context={[data?.results, isLoading, isFetching, setPageFu, refetchFu, myProfileKey]} />
 );
};
