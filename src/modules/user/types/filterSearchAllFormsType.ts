import { GenderType, TeamAnnouncementType } from "../../../types/PROFILE/accountMainGlobalType";

export interface FilterSearchAllFormsType {
  page: number;
  pageSize?: number;
  query?: string;
  // formId?: string;
  cityIds?: number | null;
  genreIds?: string[];
  instrumentIds?: string[];
  institutionTypeId?: string;
  gender?: GenderType;
  ageStart?: number;
  ageEnd?: number;
  teamType?: TeamAnnouncementType;
  formType?: string
}
