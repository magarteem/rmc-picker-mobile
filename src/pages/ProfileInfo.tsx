import { AboutProfile } from "../common/components/profile/aboutProfile/AboutProfile";
import { HeaderProfile } from "../common/components/profile/cardsProfile/HeaderProfile";
import { HeaderWrapper } from "../common/layout/header/HeaderWrapper";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import { InitialStateUserType, ProfileDataApiDataType } from "../modules/user/types/userSliceType";
import { useOutletContext } from "react-router-dom";
import { PreLoader } from "../common/components/preLoader/PreLoader";

interface ProfileInfoType {
 isLoading: boolean;
 profileData: InitialStateUserType;
 profileDataApiData: ProfileDataApiDataType;
}

export const ProfileInfo = () => {
 const { profileData, profileDataApiData, isLoading }: ProfileInfoType = useOutletContext();

 return (
  <>
   {!isLoading ? (
    <>
     <HeaderWrapper srcPhoto={profileData.avatar?.uri}>
      <HeaderProfile
       change={true}
       settings={true}
       avatar={profileData.avatar?.uri}
       profileDataApiData={profileDataApiData}
       textLabel={profileData.type_account.name}
      />
     </HeaderWrapper>

     <AboutProfile userDataProfile={profileData} />
    </>
   ) : (
    <PreLoader />
   )}
   <PopUpNavigateGradient />
  </>
 );
};
