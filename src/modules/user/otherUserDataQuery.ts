import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import queryString from "query-string";
import { doneParseLocalStorage } from "../../helpers/getJsonParseLocalStorage";
import { ResponseAdsType } from "../ads/types/responseAdsType";
import { ResponseNewsType } from "../timeLine/types/responseNewsType";
import { MusicianTypeResponse } from "./types/putReqestUpdateMyForm";
import { AllFormsType } from "./types/responseSearchAllForms";
import { ProfileDataApiDataType } from "./types/userSliceType";

export const otherUserDataQuery = createApi({
 reducerPath: "otherUserDataQuery",
 baseQuery: fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_URL_PROFILE}`,
  prepareHeaders: async (headers) => {
   headers.set("authorization", `Bearer ${localStorage.getItem(`auth-token`)}`);
   headers.set("accept", `application/json`);
   headers.set("form_id", doneParseLocalStorage.id);
   return headers;
  },
 }),

 endpoints: (build) => ({
  //! NEWS
  otherUserNews: build.query<ResponseNewsType, { page: number; formId: string }>({
   query: ({ page, formId }) => {
    const params = {
     page: page,
     pageSize: 5,
     formId: formId,
    };

    return {
     url: `news/search?${queryString.stringify(params)}`,
    };
   },

   forceRefetch({ currentArg, previousArg, endpointState }) {
    const notDoubleFetch = endpointState?.data as ResponseNewsType;
    const rulesQuery = () => {
     if (
      notDoubleFetch &&
      notDoubleFetch.pageCount > notDoubleFetch.currentPage + 1 &&
      currentArg &&
      previousArg &&
      currentArg?.page > previousArg?.page
     ) {
      return true;
     }
    };

    return currentArg?.page !== previousArg?.page && (rulesQuery() || false);
   },

   serializeQueryArgs: ({ endpointName, queryArgs }) => {
    return endpointName;
   },

   merge: (currentCache, newItems) => {
    currentCache.pageCount = newItems.pageCount;
    currentCache.currentPage = newItems.currentPage;
    currentCache.results.push(...newItems.results);
   },
  }),

  //! VACANCY
  otherUserVacancy: build.query<ResponseAdsType, { page: number; formId: string }>({
   query: ({ page, formId }) => {
    const params = {
     page: page,
     pageSize: 5,
     formId: formId,
    };

    return {
     url: `vacancy/search?${queryString.stringify(params)}`,
    };
   },

   forceRefetch({ currentArg, previousArg, state, endpointState }) {
    const notDoubleFetch = endpointState?.data as ResponseAdsType;
    const rulesQuery = () => {
     if (
      notDoubleFetch &&
      notDoubleFetch.pageCount > notDoubleFetch.currentPage + 1 &&
      currentArg &&
      previousArg &&
      currentArg?.page > previousArg?.page
     ) {
      return true;
     }
    };
    return currentArg?.page !== previousArg?.page && (rulesQuery() || false);
   },

   serializeQueryArgs: ({ endpointName, queryArgs }) => {
    return endpointName;
   },

   merge: (currentCache, newItems) => {
    currentCache.pageCount = newItems.pageCount;
    currentCache.currentPage = newItems.currentPage;
    currentCache.results.push(...newItems.results);
   },
  }),

  //! ADS
  otherUserAnnouncement: build.query<ResponseAdsType, { page: number; formId: string }>({
   query: ({ page, formId }) => {
    const params = {
     page: page,
     pageSize: 5,
     formId: formId,
    };

    return {
     url: `announcement/search?${queryString.stringify(params)}`,
    };
   },

   forceRefetch({ currentArg, previousArg, state, endpointState }) {
    const notDoubleFetch = endpointState?.data as ResponseAdsType;
    const rulesQuery = () => {
     if (
      notDoubleFetch &&
      notDoubleFetch.pageCount > notDoubleFetch.currentPage + 1 &&
      currentArg &&
      previousArg &&
      currentArg?.page > previousArg?.page
     ) {
      return true;
     }
    };
    return currentArg?.page !== previousArg?.page && (rulesQuery() || false);
   },

   serializeQueryArgs: ({ endpointName, queryArgs }) => {
    return endpointName;
   },

   merge: (currentCache, newItems) => {
    currentCache.pageCount = newItems.pageCount;
    currentCache.currentPage = newItems.currentPage;
    currentCache.results.push(...newItems.results);
   },
  }),

  //! HIS ACCOUNT ???

  getByUser: build.query<AllFormsType[] | any, string>({
   query: (get_by_user_Id) => {
    return {
     url: `form/get_by_user/${get_by_user_Id}`,
    };
   },

   transformResponse: (response: any) => {
    const m = response.map((x: any) => Object.values(x));
    const allForms: MusicianTypeResponse[] = [].concat(...m);

    return allForms.map((x) => {
     const allFormsReStructure = {
      formId: x.id,
      tritoneUserId: x.tritoneUserId,
      name: x.document.name,
      avatar: x.avatar,
      city: x.document.city ?? null,
      birthday: x.document.birthday,
      instruments: x.instruments ?? [],
      genres: x.genres ?? [],
      contactRequestStatus: x.contactRequestStatus,
      formType: "MusicShop",
      createdDate: "2023-03-24T06:46:11.702596Z",
     };
     return allFormsReStructure;
    });
   },
  }),

  otherUserAccount: build.query<ResponseAdsType, { page: number; formId: string }>({
   query: ({ page, formId }) => {
    const params = {
     page: page,
     pageSize: 5,
     formId: formId,
    };

    return {
     url: `form/search?${queryString.stringify(params)}`,
    };
   },

   forceRefetch({ currentArg, previousArg, state, endpointState }) {
    const notDoubleFetch = endpointState?.data as ResponseAdsType;
    const rulesQuery = () => {
     if (
      notDoubleFetch &&
      notDoubleFetch.pageCount > notDoubleFetch.currentPage + 1 &&
      currentArg &&
      previousArg &&
      currentArg?.page > previousArg?.page
     ) {
      return true;
     }
    };
    return currentArg?.page !== previousArg?.page && (rulesQuery() || false);
   },

   serializeQueryArgs: ({ endpointName, queryArgs }) => {
    return endpointName;
   },

   merge: (currentCache, newItems) => {
    currentCache.pageCount = newItems.pageCount;
    currentCache.currentPage = newItems.currentPage;
    currentCache.results.push(...newItems.results);
   },
  }),
 }),
});

export const {} = otherUserDataQuery;
