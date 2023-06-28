import React from "react";
import { TitleComponent } from "../../components/TitleComponent";
import { Box, Button, colors, useTheme } from "@mui/material";
import { DashboardComponent } from "../../components/DashboardComponent";
import { DownloadOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <TitleComponent name="dashboard" />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlined sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
      <DashboardComponent />
    </Box>
  );
};

export default Dashboard;
