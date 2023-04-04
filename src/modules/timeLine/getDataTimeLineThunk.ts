import { createAsyncThunk } from "@reduxjs/toolkit";
// import { timeLineBD } from "./service/timlineBD";
import { InitialStateTeamLineType } from "./types/timlineSliceType";

export const getDataTimeLineThunk = createAsyncThunk<
 InitialStateTeamLineType[],
 InitialStateTeamLineType[]
>(
 `getDataTimeLineThunk/user`,
 async function (timeLineBD, { rejectWithValue }) {
  try {
   //return await new Promise(resolve => setTimeout(resolve, 1000));
   return timeLineBD;
  } catch (error) {
   return rejectWithValue(error);
  }
 }
);

//ts createAsyncThunk (тип возращаемых данных(undefined если не передаём), тип входящих параметров, тип возвращ. ошибки )
//await axios.get<AxiosResponse<AttendanceResponseType[]>>(`${env_baseUrl}`)
