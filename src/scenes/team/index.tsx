import { Box, Typography, colors } from "@mui/material";
import React from "react";
import { TitleComponent } from "../../components/TitleComponent";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

const RenderCellCustom = (row: any) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { access } = row;

  return (
    <Box
      width="60%"
      m="0 auto"
      p="5px"
      display="flex"
      justifyContent="center"
      bgcolor={
        access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]
      }
      borderRadius="4px"
    >
      {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
      {access === "user" && <SecurityOutlinedIcon />}
      {access === "manager" && <LockOpenOutlinedIcon />}
      <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
        {access}
      </Typography>
    </Box>
  );
};

const ManageTeamComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    {
      field: "email",
      headerName: "Email Address",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: (params: any) => RenderCellCustom(params.row),
    },
  ];
  return (
    <Box m="20px">
      <TitleComponent
        title={"Team"}
        subtitle={"Managing the team members"}
      ></TitleComponent>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};

export default ManageTeamComponent;
