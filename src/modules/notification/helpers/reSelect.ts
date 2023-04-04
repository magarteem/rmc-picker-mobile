import { ResultAdsTypeResponse } from "../../ads/types/responseAdsType";
import { ResultOutcomingTypeResponse } from "../types/responseNotificationType";

export const reSelectData = (data: ResultOutcomingTypeResponse): ResultAdsTypeResponse => {
 const reData = {
  id: data.id,
  form: { ...data.requestedForm },
  title: data.announcement?.title,
  city: data.announcement?.city,
  experience: "experience",
  contacts: [],
  createdTime: data.announcement?.createdDate,
  genres: data.announcement?.genres,
  description: data.announcement?.description,
  instruments: data.announcement?.instruments,
  musicianAnnouncementDocument: null,
  teamAnnouncementDocument: null,
  soundProducerAnnouncementDocument: null,
  jobDocument: null,
  conditions: {
   salary: data.announcement?.conditions?.salary ?? "",
   employmentType: data.announcement?.conditions
    ? data.announcement?.conditions.employmentType
    : "",
   scheduleDescription: data.announcement?.conditions?.scheduleDescription ?? "",
  },
  announcementStatusResponse: data.status,
 };
 return reData;
};
