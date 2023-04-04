import { createAsyncThunk } from "@reduxjs/toolkit";
import { TimelineCards } from "../ads/types/adsSliceType";

export const updateDataNotificationThunk = createAsyncThunk<
  [number | string, { userId: string; status: number }],
  [number | string, { userId: string; status: number }]
>(
  `updateDataNotificationThunk/ads`,
  async function (
    OutgoingNotificationData,
    { rejectWithValue }
  ) {
    try {
      //return await new Promise(resolve => setTimeout(resolve, 1000));
      return OutgoingNotificationData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//ts createAsyncThunk (тип возращаемых данных(undefined если не передаём), тип входящих параметров, тип возвращ. ошибки )
//await axios.get<AxiosResponse<AttendanceResponseType[]>>(`${env_baseUrl}`)
