import arrowReturnWhite from "../assets/icons/arrowBack.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AboutProfile } from "../common/components/profile/aboutProfile/AboutProfile";
import { HeaderProfile } from "../common/components/profile/cardsProfile/HeaderProfile";
import { HeaderWrapper } from "../common/layout/header/HeaderWrapper";
import { InitialStateUserType } from "../modules/user/types/userSliceType";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import { ReactComponent as ShareIcons } from "../assets/icons/shareIcons.svg";
import { onShare } from "../modules/pwa/onShare";
import { actionGetDataThisActiveForms } from "../modules/user/helpers/actionGetDataThisActiveForms";
import { useGetOtherUserProfileForIDQuery } from "../modules/user/getGetMyProfileQuery";
import { PreLoader } from "../common/components/preLoader/PreLoader";
import { restructureDateApiForStore } from "../modules/user/helpers/restructypeDateApiForStore";
import s from "./styles/otherUserProfile.module.scss";
import { InButton } from "../common/ui-elements/button/InButton";
import { EnumContactRequestStatusResponse } from "../types/PROFILE/enum/EnumContactRequestStatusResponse";
import { EnumPrivateType } from "../types/PROFILE/enum/EnumPrivateType";

const dataNull: InitialStateUserType = {
 id_user: "",
 name: "",
 email: "",
 phone: "",
 webSite: "",
 city: { id: 1, name: "" },
 age: 0,
 avatar: null,
 gender: { id: "Male", name: "Мужской" },
 type_account: { id: "", name: "" },
 skills: {
  tool: [],
  genre: [],
  workExperience: "",
  education: "",
  master: { id: "NoSkill", name: "Диванный" },
  inspiration: [],
 },
 portfolio_photo: null,
 private_settings: { id: "", name: "" },
 address: "",
 metroId: null,
 institutionType: null,
 from_opening_hours: 0,
 to_opening_hours: 0,
 area: null,
 schedule: null,
 privateType: EnumPrivateType.SHOW_ALL,
 contactRequestStatus: EnumContactRequestStatusResponse.NO_REQUEST,
};

export const OtherUserProfile = () => {
 const { id_user } = useParams();
 const [user, setUser] = useState<InitialStateUserType>();

 const { data, isLoading, isError } = useGetOtherUserProfileForIDQuery(id_user || "");

 console.log("data = = = ", data);
 // useEffect(() => {
 //  for (const key in actions_payload) {
 //   //@ts-ignore
 //   if (actions_payload[key]) {
 //    const reselectData = actionGetDataThisActiveForms(
 //     //@ts-ignore
 //     actions_payload[key],
 //     {
 //      id: "12",
 //      nameForms: "teamForm",
 //     }
 //    );
 //    setUser(reselectData);
 //   }
 //  }
 // }, []);

 useEffect(() => {
  for (const key in data) {
   //@ts-ignore
   if (data[key]) {
    const reselectData = actionGetDataThisActiveForms(
     //@ts-ignore
     data[key],
     {
      id: "12",
      nameForms: "teamForm",
     }
    );
    setUser(reselectData);
   }
  }
 }, [data]);

 // const reselectData = actionGetDataThisActiveForms(
 //  actions_payload.musicianForm,
 //  {
 //   id: "12",
 //   nameForms: "teamForm",
 //  }
 // );

 // useEffect(() => {
 // fetch(`..../user/${id_user}`).then(res => res.json()).then(data => setUser(data))
 //const dataOneUser = TempData.find(
 // (x) => x.form.formId === id_user
 //);
 //return dataOneUser && setUser(dataOneUser);
 // }, [id_user]);

 //if (isLoading) return <PreLoader />;
 // if (!isLoading) {
 //  console.log("data = ", data);
 // }

 if (isLoading) return <PreLoader />;

 return (
  <>
   <HeaderWrapper srcPhoto={user?.avatar?.uri}>
    <HeaderProfile
     textLabel={data && Object.keys(data)[0].replace("Form", "")} //тип акк в чужом профиле
     profileDataApiData={restructureDateApiForStore(actions_payload)}
     avatar={user?.avatar?.uri}
     share={<ShareIcons onClick={onShare} className={s.shareIcon} />}
     cancelImgIcon={arrowReturnWhite}
    />
   </HeaderWrapper>

   {user && <AboutProfile userDataProfile={user} />}
   {isError && (
    <p className={s.closedProfileInfo}>
     <InButton textButton="Профиль закрыт" isValidInButton={false} />
    </p>
   )}
   <PopUpNavigateGradient />
  </>
 );
};

const actions_payload: any = {
 institutionForm: null,
 musicalWorkshopForm: null,
 musicianForm: {
  instruments: [
   {
    id: "23827237-926e-49ee-9c63-dba9a37360e8",
    name: "Губная гармоника",
    icon: "harmonica",
   },
   {
    id: "69ca6c3f-aa4b-4163-95f6-3d54988977df",
    name: "Волынка",
    icon: "bagpipes",
   },
   {
    id: "843cf38f-70e7-4980-a8ae-c2e4f2b32fdd",
    name: "Кларнет",
    icon: "clarinet",
   },
  ],
  genres: [
   {
    id: "26a74546-52f4-452c-ac32-b973d4a100d6",
    name: "Альтернатива",
    color: "#E7685F",
   },
   {
    id: "4c3d0fde-3a18-4ee4-b596-12d625a673fa",
    name: "Гранж",
    color: "#FF6A6A",
   },
   {
    id: "545a4c3c-e0b7-46bd-9398-c0a0cbe1fe33",
    name: "Прогрессив",
    color: "#FF6A6A",
   },
  ],
  id: "43e6d5e8-23ff-4014-a341-09ff8aa287fb",
  isVerified: false,
  isActive: false,
  privateType: "HideAll",
  avatar: {
   name: "16160153541.png",
   uri: "https://3tone-test.storage.yandexcloud.net/16160153541_43bfc109-6c37-4e09-8257-20f86486d9b5.png",
  },
  portfolios: [
   {
    name: "16160154274.jpg",
    uri: "https://3tone-test.storage.yandexcloud.net/16160154274_6d1b0fc5-3141-42b9-999c-083023c09a49.jpg",
   },
  ],
  document: {
   gender: "Male",
   birthday: "2008-02-05",
   experience: "string",
   skill: "Confident",
   education: "snhhhhhhhhhh",
   name: "string1eew 13q",
   city: {
    id: 10,
    title: "Волгоград",
    countryTitle: null,
    important: true,
   },
   description: "string 122222222222a",
   contacts: [
    {
     contactType: "phone",
     value: "string",
    },
   ],
  },
 },
 soundProducerForm: null,
 musicianSchoolForm: null,
 musicShopForm: null,
 rehearsalBaseForm: null,
 recordingStudioForm: null,
 teamForm: null,
};
