export const styleSxTool = {
 formcontrol: {
  "& .MuiFormLabel-root": {
   lineHeight: "inherit",
   color: "#1A1C18",

   "& .MuiFormLabel-asterisk": {
    color: "red",
   },
  },
  "& .Mui-focused": {
   color: "#1A1C18 !important",
  },
 },

 stack: {
  "@media (max-width: 400px)": {
   display: "flex !important",
   flexWrap: "wrap !important",
   gap: "3px 2px !important",
  },
 },

 select: {
  minHeight: "48px !important",
  borderRadius: "8px",

  "& .MuiSvgIcon-root": {
   color: "#000000",
  },

  "& .MuiSelect-select": {
   height: "100% !important",
   padding: "8px 24px 8px 14px !important",

   "&  div": {
    display: "flew",
    flexWrap: "wrap",
    gap: "4px",
   },
  },

  "&.Mui-error .MuiOutlinedInput-notchedOutline": {
   color: "red !important",
   border: "1px solid red !important",
  },

  fieldset: {
   border: "1px solid #C6D1B8 !important",
   borderRadius: "8px",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
   border: "1px solid #C6D1B8",
  },
 },

 chip: {
  display: "flex !important",
  alignItems: "center !important",
  background:
   " linear-gradient(0deg, rgba(43, 108, 0, 0.08), rgba(43, 108, 0, 0.08)), #FDFDF5",
  border: " 1px solid #66784E",
  borderRadius: " 30px",
  fontSize: "14px",
  margin: "0 !important",
  color: "#1A1C18",

  "@media (max-width: 400px)": {
   flexWrap: "wrap !important",
   gap: "2px !important",
  },

  "& .MuiChip-deleteIcon": {
   display: "flex",
   alignItems: "center",
   height: "10px !important",
   svg: {
    width: "14px",
    stroke: "black",
    path: {
     fill: "black",
    },
   },
  },
  "& .MuiChip-avatar": {
   height: "18px !important",
  },
  "& .MuiChip-label": {
   padding: "4px 6px 4px !important",
  },
 },

 checkbox: {
  padding: "0",
  "& .MuiSvgIcon-root": {
   width: "20px !important",
   height: "20px !important",
   borderRadius: "20px !important",
   color: "#727471",
  },

  "&.Mui-checked": {
   svg: {
    color: "#FF5A13",
   },
  },
 },

 helper: {
  position: "absolute",
  bottom: "-18px",
  color: "#ff0000 !important",
 },

 menuItem: {
  img: {
   padding: "0 3px 0 10px ",
  },
 },

 listItem: {
  "& .MuiTypography-root": {
   fontWeight: 600,
  },
 },

 inputLabel: {
  color: "#1A1C18 !important",
 },

 MenuProps: {
  "& .MuiPaper-root": {
   padding: "10px 16px !important",
  },

  ".MuiList-root li": {
   height: "37px !important",
   padding: "0 14px",
   minHeight: "auto !important",

   "&.Mui-selected": {
    background: "#4dd64d2e",
   },

   "& .MuiListItemText-root .MuiTypography-root": {
    lineHeight: "1 !important",
    fontSize: "14px",
    color: "#242424 ",
    fontFamily: `Mulish_Regular, sans-serif !important`,
   },
  },
 },
};
