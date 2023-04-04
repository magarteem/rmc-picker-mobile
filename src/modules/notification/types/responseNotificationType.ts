import { AnnouncementStatusResponseType } from "../../../types/PROFILE/accountMainGlobalType";
import { CityResultsType } from "../../../types/PROFILE/cityGlobalType";
import { ConditionsType } from "../../ads/types/requestAdsType";
import { FormNewsType } from "../../timeLine/types/responseNewsType";
import { GenreSliceType, ToolsSliceType } from "../../user/types/userSliceType";

export interface TriggerOrRequestedFormType extends FormNewsType {
 instruments: ToolsSliceType[];
 genres: GenreSliceType[];
 createdDate: string;
 birthday: string;
 contactRequestStatus: string;
 formType: string;
}

export interface AnnouncementType {
 announcementId: string;
 title: string;
 city: CityResultsType;
 instruments: ToolsSliceType[];
 genres: GenreSliceType[];
 description: string;
 createdDate: string;
 announcementType: string;
 conditions: ConditionsType | null;
}

export interface ResultOutcomingTypeResponse {
 id: string;
 type: "AnnouncementReply" | "Contact";
 status: AnnouncementStatusResponseType;
 requestedForm: TriggerOrRequestedFormType;
 triggerForm: null;
 announcement: AnnouncementType;
}
export interface ResponseOutgoingType {
 currentPage: number;
 pageCount: number;
 pageSize: number;
 rowCount: number;
 results: ResultOutcomingTypeResponse[];
}

export interface ResultIncomingTypeResponse {
 id: string;
 type: "AnnouncementReply" | "Contact";
 status: AnnouncementStatusResponseType;
 requestedForm: null;
 triggerForm: TriggerOrRequestedFormType;
 announcement: AnnouncementType;
}
export interface ResponseIncomingType {
 currentPage: number;
 pageCount: number;
 pageSize: number;
 rowCount: number;
 results: ResultIncomingTypeResponse[];
}
