import {
 createApi,
 fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";
import { CityGlobalType } from "../../types/PROFILE/cityGlobalType";
import { GenreGlobalType } from "../../types/PROFILE/genreGlobalType";
import { InstitutionTypeGlobalType } from "../../types/PROFILE/institutionTypeGlobalType";
import { InstrumentGlobalType } from "../../types/PROFILE/InstrumentGlobalType";

export const getCityQuery = createApi({
 reducerPath: "getCityQuery",
 baseQuery: fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_URL_PROFILE}`,
 }),
 endpoints: (build) => ({
  getCityData: build.query<CityGlobalType, number>({
   query: (limit = 50) => ({
    url: "city",
    params: {
     page: 0,
     pageSize: limit,
    },
   }),
  }),
  getMetroForCity: build.mutation<CityGlobalType, string>({
   query: (str) => ({
    url: `city`,
    params: {
     page: 0,
     pageSize: 30,
     query: str,
    },
   }),
  }),
  getCityDataAsync: build.query<
   CityGlobalType,
   { page: number; query: string }
  >({
   query: (arg) => ({
    url: "city",
    params: {
     page: !!arg.page ? arg.page : 0,
     pageSize: "20",
     query: !!arg.page ? "" : arg.query,
    },
   }),
  }),
  getGenreData: build.query<GenreGlobalType[], void>({
   query: (arg) => ({
    url: "genre",
   }),
  }),
  getToolData: build.query<InstrumentGlobalType[], void>({
   query: (arg) => ({
    url: "instrument",
   }),
  }),
  getInstitutionTypeData: build.query<
   InstitutionTypeGlobalType[],
   void
  >({
   query: () => ({
    url: "institutiontype",
   }),
  }),
 }),
});

export const {
 useGetCityDataQuery,
 useGetCityDataAsyncQuery,
 useGetGenreDataQuery,
 useGetToolDataQuery,
 useGetInstitutionTypeDataQuery,
 useGetMetroForCityMutation,
} = getCityQuery;
