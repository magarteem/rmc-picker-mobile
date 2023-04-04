import dayjs from "dayjs";
import { EnumTypeAccount } from "../../../types/PROFILE/enum/EnumTypeAccount";
import { ISignUpFormValues } from "../../authorization/types/authType";
import { ChangeProfileFormValues } from "../types/userSliceType";

export const putUpdateMyFormAccountData = (
 data: ISignUpFormValues | ChangeProfileFormValues,
 typeAccount: string
) => {
 const tempContact = [
  { contactType: "phone", value: data.phone },
  { contactType: "email", value: data.email_contact },
  { contactType: "web-site", value: data.web_site },
 ];
 // const contactData = tempContact.filter((x) => {
 //  return !!x.value;
 // });

 const updateFormMucician = {
  document: {
   name: data.name_field,
   cityId: data.city?.id,
   description: data.inspiration,
   contacts: tempContact.filter((x) => {
    return !!x.value;
   }),
  },
 };

 const from_Hour = dayjs(data.from_opening_hours).format("H:mm:ss.0000000");
 const to_Hour = dayjs(data.to_opening_hours).format("H:mm:ss.0000000");

 const schedule = {
  Sunday: [{ start: from_Hour, end: to_Hour }],
  Monday: [{ start: from_Hour, end: to_Hour }],
  Tuesday: [{ start: from_Hour, end: to_Hour }],
  Wednesday: [{ start: from_Hour, end: to_Hour }],
  Thursday: [{ start: from_Hour, end: to_Hour }],
  Friday: [{ start: from_Hour, end: to_Hour }],
  Saturday: [{ start: from_Hour, end: to_Hour }],
 };

 const geolocations = [
  {
   longitude: 46.84,
   latitude: 29.58,
  },
 ];

 const parseLocalStorage = JSON.parse(typeAccount);

 switch (parseLocalStorage?.nameForms) {
  case EnumTypeAccount.MUSICIAN:
   return {
    privateType: data.private_settings?.id,
    ...updateFormMucician,
    document: {
     ...updateFormMucician.document,
     gender: data.gender?.id,
     birthday: dayjs(data.age).format("YYYY-MM-DD"),
     experience: data.work_experience,
     skill: data.master?.id,
     education: data.education,
    },
    instrumentIds: data.tool.map((x) => x.id),
    genreIds: data.genre.map((x) => x.id),
   };

  case EnumTypeAccount.TEAM:
   return {
    ...updateFormMucician,
    document: {
     ...updateFormMucician.document,
     experience: data.work_experience,
     teamType: data.type_collective?.id,
    },
    genreIds: data.genre.map((x) => x.id),
    members: [
     {
      musicianNameOrExternalLink: data.name_field,
      instrumentIds: data.tool?.map((x) => x.id),
     },
    ],
    privateType: data.private_settings?.id,
   };

  case EnumTypeAccount.INSTITUTION:
   return {
    ...updateFormMucician,
    document: {
     ...updateFormMucician.document,
     metroId: data.metroId?.id || null,
     schedule: { ...schedule },
     geolocations: geolocations,
     institutionType: { id: data.institutionType?.id },
     address: data.address,
     area: !!data.area ? data.area : 0,
    },
   };

  case EnumTypeAccount.SOUND_PRODUCER:
   return {
    ...updateFormMucician,
    document: {
     ...updateFormMucician.document,
     education: data.education,
     experience: data.work_experience,
    },
    privateType: data.private_settings?.id,
   };

  default:
   return {
    ...updateFormMucician,
    document: {
     ...updateFormMucician.document,
     metroId: data.metroId?.id || null,
     schedule: { ...schedule },
     geolocations: geolocations,
     address: data.address,
    },
   };
 }
};
