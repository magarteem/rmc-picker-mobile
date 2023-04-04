import { genderBD, profilePrivacySettings, skillBD } from "../../authorization/service/BD";
import { teamTypeADS } from "../../vacancy/service/createVacancyBD";
import { MusicianTypeResponse } from "../types/putReqestUpdateMyForm";
import { InitialStateUserType } from "../types/userSliceType";

export const actionGetDataThisActiveForms = (
 actionPayload: MusicianTypeResponse,
 typeAccount: { id: string; nameForms: string }
): InitialStateUserType | any => {
 // console.log("actionPayload", actionPayload);

 let y = actionPayload.document?.contacts.find((x) => x.contactType === "phone");

 const updateFormMusician = {
  //id_user: typeAccount.id,
  id_user: actionPayload.id,
  name: !!actionPayload.document?.name ? actionPayload.document.name : "",

  phone: actionPayload.document?.contacts.find((x) => x.contactType === "phone")?.value,
  email: actionPayload.document?.contacts.find((x) => x.contactType === "email")?.value,
  webSite: actionPayload.document?.contacts.find((x) => x.contactType === "web-site")?.value,

  city: {
   id: !!actionPayload.document?.city?.id ? actionPayload.document.city.id : 0,
   name: !!actionPayload.document?.city?.title ? actionPayload.document.city.title : "",
  },
  age: new Date(actionPayload.document?.birthday).getTime() || 0,
  avatar: actionPayload.avatar || null,
  gender: genderBD.find((x) => x.id === actionPayload.document?.gender) || null,
  type_account: {
   id: typeAccount.id,
   name: typeAccount.nameForms || "",
  },
  skills: {
   tool:
    actionPayload?.instruments ||
    (actionPayload.members && actionPayload.members[0]?.instruments) ||
    [],
   genre: actionPayload.genres || [],
   workExperience: actionPayload.document?.experience,
   master: skillBD.find((x) => x.id === actionPayload.document?.skill) || null,
   education: actionPayload.document?.education,
   inspiration: actionPayload.document?.description,
  },

  //description: actionPayload.document?.description,
  private_settings: profilePrivacySettings.find((x) => x.id === actionPayload.privateType) || null,
  type_collective: teamTypeADS.find((x) => x.id === actionPayload.document?.teamType) || null,
  portfolio_photo: actionPayload.portfolios || null,
  schedule: actionPayload.document?.schedule,
  address: actionPayload.document?.address,
  metroId: actionPayload.document?.metro,
  institutionType: {
   id: actionPayload.document?.institutionType?.id,
   name: actionPayload.document?.institutionType?.type,
  },
  privateType: actionPayload.privateType,
  area: actionPayload.document?.area,
  contactRequestStatus: actionPayload.contactRequestStatus,
 };
 //==================
 if (actionPayload) {
  return updateFormMusician;
 }
};
