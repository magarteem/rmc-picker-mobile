export const styleSxTabsComponent = {
  tabs: {
    width: "100%",
    borderBottom: "1px solid #E9F0DA;",

    "& .MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "space-around",

      "& .MuiButtonBase-root": {
        padding: 0,
        fontWeight: 600,
        fontSize: " 14px",
      },
      "& .MuiButtonBase-root.Mui-selected": {
        color: "#2B6C00",
      },
    },

    "& .MuiTabs-indicator": {
      height: "3px",
      background: "#2B6C00",
      borderRadius: "100px 100px 0px 0px",
    },
  },

  tab: {
    textTransform: "none",
  }
}