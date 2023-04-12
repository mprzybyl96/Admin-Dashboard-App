import { Box } from "@mui/material";
import React from "react";
import { TitleComponent } from "../TitleComponent";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";

export const ManageTeamComponent = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "email",
      headerName: "Email Address",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "access", headerName: "Access" },
  ];
  return (
    <Box>
      <TitleComponent
        title={"Team"}
        subtitle={"Managing the team members"}
      ></TitleComponent>
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};
