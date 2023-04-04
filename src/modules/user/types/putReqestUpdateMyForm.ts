import {
 DocumentType,
 GenderType,
 MembersType,
 PortfolioType,
 PrivateType,
 SkillType,
 ScheduleType,
} from "../../../types/PROFILE/accountMainGlobalType";
import { EnumContactRequestStatusResponse } from "../../../types/PROFILE/enum/EnumContactRequestStatusResponse";
import { EnumPrivateType } from "../../../types/PROFILE/enum/EnumPrivateType";
import { EnumTypeTeam } from "../../../types/PROFILE/enum/EnumTypeTeam";
import { InstitutionTypeGlobalType } from "../../../types/PROFILE/institutionTypeGlobalType";
import { MetroGlobalType } from "../../../types/PROFILE/metroGlobalType";
import { GenreSliceType, ToolsSliceType } from "./userSliceType";

// отправленное remain
export interface RequestUpdateMyForm {
 privateType: PrivateType;
 document: DocumentType;
 instrumentIds: string[];
 genreIds: string[];
 members: MembersType[];
}
//==== ответ main
export interface AccountMainGlobalType {
 id: string;
 isVerified: true;
 privateType: PrivateType;
 avatarLink: string;
 portfolios: PortfolioType[];
 document: DocumentType;
}

//======================================================
// ==============   InstitutionTypeReqest   ===============
export type UpdateMyFormAccountGeneralType = Omit<
 RequestUpdateMyForm,
 "instrumentIds" | "genreIds" | "members"
>;
interface InstitutionTypeType extends DocumentType {
 institutionType: {
  id: string;
  type: string;
 };
}
export interface InstitutionTypeReqest extends UpdateMyFormAccountGeneralType {
 document: InstitutionTypeType;
}
// ==============   InstitutionTypeResponse   ===============
//  ?????

// ==============   - Response -   ===============
// MusicalWorkshop as UpdateMyFormAccountGeneralType
// MusicianSchool as UpdateMyFormAccountGeneralType
// MusicShop as UpdateMyFormAccountGeneralType
// RehearsalBase as UpdateMyFormAccountGeneralType
// SoundEngineer as UpdateMyFormAccountGeneralType
// ==============   ---   ===============

//======================================================
// ==============   MusicianTypeRequest   ===============
type MusicianTypeOmit = Omit<RequestUpdateMyForm, "members">;
export interface MusicianTypeRequest extends MusicianTypeOmit {
 document: Omit<DocumentType, "schedule"> & {
  gender: GenderType;
  birthday: string;
  experience: null | string;
  skill: string;
 };
}
// ==============   MusicianTypeResponse   ===============
type MusicianTypeOmitResponse = Omit<RequestUpdateMyForm, "instrumentIds" | "genreIds" | "members">;
export interface MusicianTypeResponse extends MusicianTypeOmitResponse {
 id: string;
 isVerified: boolean;
 isActive: boolean;
 avatar: PortfolioType | null;
 portfolios: PortfolioType[];
 instruments: ToolsSliceType[];
 genres: GenreSliceType[];

 tritoneUserId: string;
 privateType: EnumPrivateType;
 contactRequestStatus: EnumContactRequestStatusResponse;

 members: [
  {
   musicianId: null;
   nameOrExternalLink: string;
   instruments: ToolsSliceType[];
  }
 ];
 document: Omit<DocumentType, "schedule"> & {
  gender: GenderType;
  birthday: string | number;
  experience: string;
  education: string;
  skill: SkillType;
  teamType: EnumTypeTeam;
  schedule: ScheduleType;
  address: string;
  metro: MetroGlobalType | null;
  area: number | null;
  institutionType: InstitutionTypeGlobalType;
 };
}

//======================================================
// ==============   TeamTypeReqest   ===============
// ==============   TeamTypeResponse   ===============
type TeamTypeOmitResponse = Omit<RequestUpdateMyForm, "instrumentIds">;
export interface TeamTypeResponse extends TeamTypeOmitResponse {
 document: Omit<DocumentType, "schedule" | "geolocations"> & {
  experience: string;
  teamType: string;
 };
 members: [
  {
   musicianId: string;
   musicianNameOrExternalLink: string;
   instrumentIds: string[];
  }
 ];
}
