import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockTransactions } from "../data/mockData";
import { DownloadOutlined, Person } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { PointOfSale } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import { Traffic } from "@mui/icons-material";

import LineChart from "../scenes/lineChart";
import BarChart from "../scenes/barChart";
import GeoChart from "../scenes/geoChart";
import StatBox from "./StatBox";
import ProgressCircle from "./ProgressCircle";
import DashboardBox from "./DashboardComponents/DashboardBox";

export const DashboardComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box ml="20px">
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="140px"
        gap="20px"
      >
        <DashboardBox
          title="12,361"
          subtitle="Emails sent"
          progress={0.75}
          increase="+14%"
          icon={
            <Email sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
          }
        />
        <DashboardBox
          title="1342,1"
          subtitle="Sails Obtained"
          progress={0.5}
          increase="+10%"
          icon={
            <PointOfSale
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
        <DashboardBox
          title="4442,90"
          subtitle="New Clients"
          progress={0.1}
          increase="+90%"
          icon={
            <Person sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
          }
        />
        <DashboardBox
          title="4442,90"
          subtitle="New Clients"
          progress={0.8}
          increase="+90%"
          icon={
            <Traffic
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
    </Box>
  );
};
