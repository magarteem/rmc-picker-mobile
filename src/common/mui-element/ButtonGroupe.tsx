import checkedIcons from "../../assets/icons/checked.svg";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

interface ButtonGroupeType {
 showAdsButton: (str: string, toggle: boolean) => void;
 checked: boolean;
}

export const ButtonGroupe = ({ showAdsButton, checked }: ButtonGroupeType) => {
 return (
  <ButtonGroup
   fullWidth
   variant="contained"
   sx={{
    border: " 1px solid #C6D1B8",
    borderRadius: "100px !important",
    overflow: "hidden",
    marginBottom: "16px",
   }}
  >
   <Button
    sx={{
     borderRight: "1px solid #bdbdbd !important",
     color: checked ? "#5F1500  !important" : "#1A1C18 !important",
     fontWeight: 600,
     fontSize: "14px",

     background: checked ? "#FF8B69 !important" : "none !important",
     textTransform: "none",
    }}
    onClick={() => showAdsButton("Создать вакансию", true)}
    //onClick={showVacancyButton}
   >
    {checked && <img src={checkedIcons} alt="checkedIcons" style={{ marginRight: "10px" }} />}
    Вакансия
   </Button>
   <Button
    sx={{
     color: !checked ? "#5F1500  !important" : "#1A1C18 !important",
     fontWeight: 600,
     fontSize: "14px",

     background: !checked ? "#FF8B69 !important" : "none !important",
     textTransform: "none",
    }}
    onClick={() => showAdsButton("Создать объявление", false)}
    //onClick={showAdsButton}
   >
    {!checked && <img src={checkedIcons} alt="checkedIcons" style={{ marginRight: "10px" }} />}
    Объявление
   </Button>
  </ButtonGroup>
 );
};
