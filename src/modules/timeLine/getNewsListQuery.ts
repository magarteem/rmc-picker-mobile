import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { NewsResultType, ResponseNewsType } from "./types/responseNewsType";
import queryString from "query-string";
import { FilterParamsRequestType } from "./types/FilterFormsTimeLineFieldsType";
import apiProfile from "../../api/axiosConfigPROFILE";
import { AxiosResponse } from "axios";
import { doneParseLocalStorage } from "../../helpers/getJsonParseLocalStorage";

export const getNewsListQuery = createApi({
 reducerPath: "getNewsListQuery",
 baseQuery: fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_URL_PROFILE}`,
  prepareHeaders: async (headers) => {
   headers.set("authorization", `Bearer ${localStorage.getItem(`auth-token`)}`);
   headers.set("accept", `application/json`);
   headers.set("form_id", doneParseLocalStorage.id);
   return headers;
  },
 }),
 tagTypes: ["NEWS"],
 endpoints: (build) => ({
  infinityScrollNews: build.query<ResponseNewsType, FilterParamsRequestType | null | void>({
   query: (arg) => {
    const params = {
     page: arg?.page,
     pageSize: 5,
     query: arg?.query,
     type: arg?.type,
     cityIds: arg?.cityIds,
     genreIds: arg?.genreIds,
     instrumentIds: arg?.instrumentIds,
     formId: arg?.formId,
    };

    return {
     url: `news/search?${queryString.stringify(params)}`,
    };
   },

   serializeQueryArgs: ({ endpointName }) => {
    return endpointName;
   },

   merge: (currentCache, newItems) => {
    currentCache.currentPage = newItems.currentPage;
    currentCache.results.push(...newItems.results);
   },

   forceRefetch({ currentArg, previousArg }) {
    return currentArg !== previousArg;
   },
  }),

  deleteNews: build.mutation<void, string>({
   query: (string) => ({
    url: `news/${string}`,
    method: "DELETE",
   }),

   async onQueryStarted(id, { dispatch, queryFulfilled }) {
    try {
     await queryFulfilled;
     dispatch(
      getNewsListQuery.util.updateQueryData(
       "infinityScrollNews",
       //@ts-ignore
       undefined,
       (draft: ResponseNewsType) => {
        let r = draft.results?.filter((x) => x.id !== id);
        return { ...draft, results: r };
       }
      )
     );
    } catch {
     // особенность апи, возвращает ошибку при удалении поста с  картинкой
     dispatch(
      getNewsListQuery.util.updateQueryData(
       "infinityScrollNews",
       //@ts-ignore
       undefined,
       (draft: ResponseNewsType) => {
        let r = draft.results?.filter((x) => x.id !== id);
        return { ...draft, results: r };
       }
      )
     );
    }
   },
  }),

  oneNews: build.mutation<void, string>({
   query: (string) => ({
    url: `news/${string}`,
   }),
  }),

  sendNewNews: build.mutation<FormData, { formData: FormData }>({
   query: (payload) => ({
    url: `news`,
    method: "POST",
    body: payload.formData,
   }),

   async onQueryStarted(id, { dispatch, queryFulfilled }) {
    try {
     const { data: createData } = await queryFulfilled;

     //@ts-ignore
     apiProfile(`news/${createData.id}`).then((res: AxiosResponse<NewsResultType>) => {
      dispatch(
       getNewsListQuery.util.updateQueryData(
        "infinityScrollNews",
        //@ts-ignore
        res,
        (draft: ResponseNewsType) => {
         draft.results?.unshift(res.data);
        }
       )
      );
     });
    } catch {
     console.log("error vel");
    }
   },
  }),
 }),
});

export const {
 useSendNewNewsMutation,
 useInfinityScrollNewsQuery,
 useDeleteNewsMutation,
 useOneNewsMutation,
} = getNewsListQuery;

//export const itemAborted = createEntityAdapter({
//  selectId: (item: NewsResultType) => item.id,
// });
// export const itemsSelector = itemAborted.getSelectors();
