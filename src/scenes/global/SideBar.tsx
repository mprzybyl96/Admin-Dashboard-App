import React, { useState } from "react";
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
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HomeIcon from "@mui/icons-material/Home";

import { IconButton } from "@mui/material";
import { Box, Divider, Typography, colors, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {
  Sidebar,
  Menu,
  MenuItem,
  MenuItemStyles,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Item = ({
  title,
  icon,
  routerLink,
}: {
  title: any;
  icon: any;
  routerLink: any;
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      icon={icon}
      component={<Link to={routerLink} />}
      color={colors.greenAccent[200]}
    >
      <Typography> {title} </Typography>
    </MenuItem>
  );
};

const SubMenuTitle = ({ title }: { title: any }) => {
  const { collapsed } = useProSidebar();

  return (
    <Typography
      sx={{
        display: "flex",
        m: "15px 20px 10px 18px",
        justifyContent: !collapsed ? "flex-start" : "center",
      }}
      variant="h5"
      color={colors.grey[500]}
    >
      {title}
    </Typography>
  );
};

const CustomDivider = () => {
  return (
    <Divider
      variant="middle"
      flexItem
      sx={{
        mt: "10px",
      }}
    />
  );
};

const ProfileData = () => {
  const { collapsed } = useProSidebar();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyItems="center"
      alignItems="center"
      sx={{
        m: "10px 0 0 0",
      }}
    >
      <Box sx={{ mb: "15px" }}>
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.552xw:0.368xh;0.378xw,0.0295xh&resize=1200:*"
          width={!collapsed ? "100px" : "50px"}
          height={!collapsed ? "100px" : "50px"}
          style={{ borderRadius: "50%" }}
        />
      </Box>
      <Box sx={{ display: !collapsed ? "block" : "none", mb: "30px" }}>
        <Typography variant="h3"> Thomas Shelby </Typography>
      </Box>
    </Box>
  );
};

export const SidebarLayout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();

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
        "& .main-submenu": {
          pt: "10px",
        },
      }}
    >
      <Sidebar
        className="sidebar-root"
        backgroundColor={`${colors.primary[400]}`}
      >
        <ProfileData />
        <CustomDivider />

        <Menu menuItemStyles={menuItemStyles}>
          <div className="main-submenu">
            <Item
              title="Dashboard"
              routerLink={"/dashboard"}
              icon={<HomeIcon />}
            ></Item>
          </div>
          <div className="submenu">
            <SubMenuTitle title="Data" />
            <Item
              title="Manage Team"
              routerLink={"/data/manage-team"}
              icon={<GroupIcon />}
            ></Item>
            <Item
              title="Contacts Information"
              routerLink={"/data/contacts-information"}
              icon={<ContactsIcon />}
            ></Item>
            <Item
              title="Invoices Balances"
              routerLink={"/data/invoices-balances"}
              icon={<ReceiptIcon />}
            ></Item>
          </div>

          <div className="submenu">
            <SubMenuTitle title="Pages" />
            <Item
              title="Profile Form"
              routerLink={"/pages/profile-form"}
              icon={<PersonIcon />}
            ></Item>
            <Item
              title="Calendar"
              routerLink={"/pages/calendar"}
              icon={<CalendarMonthIcon />}
            ></Item>
            <Item
              title="FAQ Page"
              routerLink={"/pages/faq"}
              icon={<QuizIcon />}
            ></Item>
          </div>

          <div className="submenu">
            <SubMenuTitle title="Charts" />
            <Item
              title="Bar Chart"
              routerLink={"/charts/bar-chart"}
              icon={<BarChartIcon />}
            ></Item>
            <Item
              title="Line Chart"
              routerLink={"/charts/line-chart"}
              icon={<ShowChartIcon />}
            ></Item>
            <Item
              title="Pie Chart"
              routerLink={"/charts/pie-chart"}
              icon={<PieChartIcon />}
            ></Item>
            <Item
              title="Geography Chart"
              routerLink={"/charts/geography-chart"}
              icon={<MapIcon />}
            ></Item>
          </div>
        </Menu>
        <CustomDivider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: "10px",
          }}
        >
          <IconButton
            onClick={() => collapseSidebar()}
            sx={{
              transform: !collapsed ? "rotate(-90deg)" : "rotate(90deg)",
              transition: "transform 150ms ease",
            }}
          >
            <ExpandLessIcon />
          </IconButton>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default SidebarLayout;
