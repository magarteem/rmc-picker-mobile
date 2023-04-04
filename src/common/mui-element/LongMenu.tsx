import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, Navigate } from "react-router-dom";
import { RouteNames } from "../../core/router/RouteNames";
import { OptionLongMenuType } from "../../modules/timeLine/types/timlineSliceType";

interface LongMenuType {
  moreButtonCircle?: string;
  options?: OptionLongMenuType[];
}

const optionsTemp: OptionLongMenuType[] = [
  {
    label: "Редактировать",
    link: ``,
    action: () => {},
  },
  {
    label: "Скопировать ссылку",
    link: "",
    action: () => {},
  },
  { label: "Удалить", link: "#", action: () => {} },
];

const ITEM_HEIGHT = 48;

export const LongMenu = ({ moreButtonCircle, options = optionsTemp }: LongMenuType) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {moreButtonCircle ? <img src={moreButtonCircle} alt="moreButtonCircle" /> : <MoreVertIcon />}
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
        sx={{
          "& .MuiList-root": {
            background: "linear-gradient(0deg, rgba(42, 108, 4, 0.08), rgba(42, 108, 4, 0.08)), #FDFDF5",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
            borderRadius: "4px",
          },
        }}
      >
        {options.map((option) => (
          <Link to={option.link} key={option.label}>
            <MenuItem
              key={option.label}
              onClick={option.action}
              sx={{
                fontSize: "16px",
                color: "#1A1C18",
                height: "45px",
              }}
            >
              {option.label}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
};
