import { createEntityAdapter } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import queryString from "query-string";
import { doneParseLocalStorage } from "../../helpers/getJsonParseLocalStorage";
import { PortfolioType } from "../../types/PROFILE/accountMainGlobalType";
import { GenreGlobalType } from "../../types/PROFILE/genreGlobalType";
import { FilterSearchAllFormsType } from "./types/filterSearchAllFormsType";
import { AllFormsType, ResponseSearchAllFormsType } from "./types/responseSearchAllForms";
import { ProfileDataApiDataType } from "./types/userSliceType";

//export const itemsAdapter = createEntityAdapter({
// selectId: (item: AllFormsType) => item.formId,
//});
//export const itemSelector = itemsAdapter.getSelectors();

export const getMyProfileQuery = createApi({
 reducerPath: "getMyProfileQuery",
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
  getMyProfileDataQuery: build.query<GenreGlobalType[], void>({
   query: () => ({
    url: "form/my",
   }),
  }),

  sendPortfolioImg: build.mutation<
   PortfolioType[],
   { formDataImg: FormData | string; profileId: string }
  >({
   query: (payload) => ({
    url: `form/profile/${payload.profileId}`,
    method: "POST",
    body: payload.formDataImg,
   }),
  }),

  getOtherUserProfileForID: build.query<ProfileDataApiDataType, string>({
   query: (id_user) => ({
    url: `form/${id_user}`,
   }),
  }),

  changeAvatar: build.mutation<
   PortfolioType,
   { formDataImg: FormData | string; profileId: string }
  >({
   query: (payload) => ({
    url: `form/avatar/${payload.profileId}`,
    method: "POST",
    body: payload.formDataImg,
   }),
  }),

  listAccount: build.query<ResponseSearchAllFormsType, FilterSearchAllFormsType | void | null>({
   query: (arg) => {
    const params = {
     page: arg?.page || 0,
     pageSize: 10,
     query: arg?.query,
     formType: arg?.formType, //?? "Musician",
     cityId: arg?.cityIds ?? undefined,
     institutionTypeId: arg?.institutionTypeId,
     genreIds: arg?.genreIds,
     instrumentIds: arg?.instrumentIds,
     gender: arg?.gender ?? undefined, // ?? "Male",
     ageStart: arg?.ageStart ?? undefined,
     ageEnd: arg?.ageEnd ?? undefined,
     teamType: arg?.teamType ?? undefined,
    };

    return {
     url: `form/search?${queryString.stringify(params)}`,
    };
   },

   serializeQueryArgs: ({ endpointName }) => {
    return endpointName;
   },

   merge: (currentCache, newItems) => {
    currentCache.currentPage = newItems.currentPage;
    currentCache.pageCount = newItems.pageCount;
    currentCache.results.push(...newItems.results);
   },

   forceRefetch({ currentArg, previousArg, endpointState }) {
    const notDoubleFetch = endpointState?.data as ResponseSearchAllFormsType;
    const rulesQuery = () => {
     // if (
     //  notDoubleFetch &&
     //  notDoubleFetch.pageCount > notDoubleFetch.currentPage + 1 &&
     //  currentArg &&
     //  previousArg &&
     //  currentArg?.page > previousArg?.page
     // ) {
     //  return true;
     // }
     if (
      notDoubleFetch &&
      currentArg &&
      previousArg &&
      notDoubleFetch &&
      notDoubleFetch.results.length > 0 &&
      currentArg?.page > previousArg?.page
     ) {
      return true;
     } else if (notDoubleFetch && notDoubleFetch.results.length === 0) {
      return true;
     }
    };

    return currentArg !== previousArg && (rulesQuery() || false);
   },
  }),

  //! request_contacts_by_form =  send \ accept \ decline
  requestContactsByForm: build.mutation<any, { idPost: string; idMyForm: string }>({
   query: ({ idMyForm, idPost }) => {
    return {
     url: `form/${idPost}/request_contacts_by_form/${idMyForm}`,
     method: "POST",
    };
   },
  }),
  //! accept_contacts_request_by_form =  send \ accept \ decline
  acceptContactsByForm: build.mutation<any, { idPost: string; idMyForm: string }>({
   query: ({ idMyForm, idPost }) => {
    return {
     url: `form/${idPost}/accept_contacts_request_by_form/${idMyForm}`,
     method: "PUT",
    };
   },
  }),
  //! decline_contacts_request_by_form =  send \ accept \ decline
  declinetContactsByForm: build.mutation<any, { idPost: string; idMyForm: string }>({
   query: ({ idMyForm, idPost }) => {
    return {
     url: `form/${idPost}/decline_contacts_request_by_form/${idMyForm}`,
     method: "PUT",
    };
   },
  }),
 }),
});

export const {
 useGetMyProfileDataQueryQuery,
 useSendPortfolioImgMutation,
 useChangeAvatarMutation,
 useGetOtherUserProfileForIDQuery,
 useListAccountQuery,
 useRequestContactsByFormMutation,
 useAcceptContactsByFormMutation,
 useDeclinetContactsByFormMutation,
} = getMyProfileQuery;
