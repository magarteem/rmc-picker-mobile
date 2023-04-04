import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { doneParseLocalStorage } from "../../helpers/getJsonParseLocalStorage";
import { ResponseIncomingType, ResponseOutgoingType } from "./types/responseNotificationType";

export const notificationQuery = createApi({
 reducerPath: "notificationQuery",
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
  listOutgoing: build.query<ResponseOutgoingType, number | void>({
   query: (outgoingPage) => {
    console.log("outgoingPage", outgoingPage);

    return {
     url: `notification/outgoing?page=${outgoingPage}&pageSize=8`,
    };
   },
   serializeQueryArgs: ({ endpointName }) => {
    return endpointName;
   },
   merge: (currentCache, newItems) => {
    currentCache.currentPage = newItems.currentPage;
    currentCache.pageCount = newItems.pageCount;
    currentCache.results.push(...newItems.results);

    //currentCache.currentPage = newItems.currentPage;
   },
   forceRefetch({ currentArg, previousArg }) {
    return currentArg !== previousArg;
   },
  }),
  listIncoming: build.query<ResponseIncomingType, number | void>({
   query: (incomingPage) => ({
    url: `notification/incoming?page=${incomingPage ?? 0}&pageSize=8`,
   }),
   serializeQueryArgs: ({ endpointName }) => {
    return endpointName;
   },
   merge: (currentCache, newItems) => {
    currentCache.currentPage = newItems.currentPage;
    currentCache.pageCount = newItems.pageCount;
    currentCache.results.push(...newItems.results);
    //currentCache.currentPage = newItems.currentPage;
   },
   forceRefetch({ currentArg, previousArg }) {
    return currentArg !== previousArg;
   },
  }),

  //! Vacancy =  send \ accept \ decline
  sendVacancyReply: build.mutation<ResponseOutgoingType, { idPost: string; idMyForm: string }>({
   query: ({ idMyForm, idPost }) => {
    return {
     url: `vacancy/${idPost}/send_vacancy_reply/${idMyForm}`,
     method: "POST",
    };
   },
  }),
  sendVacancyAccept: build.mutation<
   ResponseOutgoingType,
   { idPost: string; userTargetIdForm: string }
  >({
   query: ({ userTargetIdForm, idPost }) => {
    return {
     url: `vacancy/${idPost}/accept_vacancy_reply/${userTargetIdForm}`,
     method: "PUT",
    };
   },
  }),
  sendVacancyDecline: build.mutation<
   ResponseOutgoingType,
   { idPost: string; userTargetIdForm: string }
  >({
   query: ({ userTargetIdForm, idPost }) => {
    return {
     url: `vacancy/${idPost}/decline_vacancy_reply/${userTargetIdForm}`,
     method: "PUT",
    };
   },
  }),

  //! Announcement =  send \ accept \ decline
  sendAnnouncementReply: build.mutation<ResponseOutgoingType, { idPost: string; idMyForm: string }>(
   {
    query: ({ idMyForm, idPost }) => {
     return {
      url: `announcement/${idPost}/send_announcement_reply/${idMyForm}`,
      method: "POST",
     };
    },
   }
  ),
  sendAnnouncementAccept: build.mutation<
   ResponseOutgoingType,
   { idPost: string; userTargetIdForm: string }
  >({
   query: ({ userTargetIdForm, idPost }) => {
    return {
     url: `announcement/${idPost}/accept_announcement_reply/${userTargetIdForm}`,
     method: "PUT",
    };
   },
  }),
  sendAnnouncementDecline: build.mutation<
   ResponseOutgoingType,
   { idPost: string; userTargetIdForm: string }
  >({
   query: ({ userTargetIdForm, idPost }) => {
    return {
     url: `announcement/${idPost}/decline_announcement_reply/${userTargetIdForm}`,
     method: "PUT",
    };
   },
  }),

  //! Contact =  send \ accept \ decline
  sendContactReply: build.mutation<
   ResponseOutgoingType,
   { id_userForm: string; parseJsonId: string }
  >({
   query: ({ parseJsonId, id_userForm }) => {
    return {
     url: `form/${id_userForm}/request_contacts_by_form/${parseJsonId}`,
     method: "POST",
    };
   },
  }),
  sendContactAccept: build.mutation<
   ResponseOutgoingType,
   { parseJsonMyActiveFormId: string; userTargetIdForm: string }
  >({
   query: ({ userTargetIdForm, parseJsonMyActiveFormId }) => {
    return {
     url: `form/${parseJsonMyActiveFormId}/accept_contacts_request_by_form/${userTargetIdForm}`,
     method: "PUT",
    };
   },
  }),
  sendContactDecline: build.mutation<
   ResponseOutgoingType,
   { parseJsonMyActiveFormId: string; userTargetIdForm: string }
  >({
   query: ({ userTargetIdForm, parseJsonMyActiveFormId }) => {
    return {
     url: `form/${parseJsonMyActiveFormId}/decline_contacts_request_by_form/${userTargetIdForm}`,
     method: "PUT",
    };
   },
  }),
 }),
});

export const {
 useListOutgoingQuery,
 useListIncomingQuery,
 useSendVacancyReplyMutation,
 useSendVacancyAcceptMutation,
 useSendVacancyDeclineMutation,
 useSendAnnouncementReplyMutation,
 useSendAnnouncementAcceptMutation,
 useSendAnnouncementDeclineMutation,
 useSendContactReplyMutation,
 useSendContactAcceptMutation,
 useSendContactDeclineMutation,
} = notificationQuery;
