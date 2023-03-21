import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import GroupIcon from "@mui/icons-material/Group";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QuizIcon from "@mui/icons-material/Quiz";

import ShowChartIcon from "@mui/icons-material/ShowChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import MapIcon from "@mui/icons-material/Map";

import {
  Box,
  Typography,
  colors,
  menuItemClasses,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  menuClasses,
  MenuItemStyles,
} from "react-pro-sidebar";

export const SidebarLayout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const menuItemStyles: MenuItemStyles = {
    root: {
      marginBottom: "5px",
    },
    icon: {
      "&:hover": {
        color: colors.blueAccent[600],
      },
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: colors.redAccent[400],
    }),
    button: {
      "&:hover": {
        backgroundColor: "transparent",
        color: colors.blueAccent[600],
      },
    },
  };

  const Item = ({ title, icon }: { title: any; icon: any }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <MenuItem icon={icon} color={colors.greenAccent[200]}>
        <Typography> {title} </Typography>
      </MenuItem>
    );
  };

  const SubMenuTitle = ({ title }: { title: any }) => {
    return (
      <Typography
        sx={{ m: "15px 20px 5px 20px" }}
        variant="h5"
        color={colors.grey[300]}
      >
        {title}
      </Typography>
    );
  };

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100%",
        "& .sidebar-root": {
          border: "none",
        },
        "& .submenu": {
          pb: "10px",
        },
      }}
    >
      <Sidebar
        className="sidebar-root"
        backgroundColor={`${colors.primary[400]}`}
      >
        <Menu menuItemStyles={menuItemStyles}>
          <div className="submenu">
            <SubMenuTitle title="Data" />
            <Item title="Manage Team" icon={<GroupIcon />}></Item>
            <Item title="Contacts Information" icon={<ContactsIcon />}></Item>
            <Item title="Invoices Balances" icon={<ReceiptIcon />}></Item>
          </div>

          <div className="submenu">
            <SubMenuTitle title="Pages" />
            <Item title="Profile Form" icon={<PersonIcon />}></Item>
            <Item title="Calendar" icon={<CalendarMonthIcon />}></Item>
            <Item title="FAQ Page" icon={<QuizIcon />}></Item>
          </div>

          <div className="submenu">
            <SubMenuTitle title="Charts" />
            <Item title="Bar Chart" icon={<BarChartIcon />}></Item>
            <Item title="Line Chart" icon={<ShowChartIcon />}></Item>
            <Item title="Pie Chart" icon={<PieChartIcon />}></Item>
            <Item title="Geography Chart" icon={<MapIcon />}></Item>
          </div>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarLayout;
