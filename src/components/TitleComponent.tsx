import { Box, Typography, colors, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

export const TitleComponent = ({
  title,
  subtitle,
}: {
  title: any;
  subtitle: any;
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      <Box>
        <Typography variant="h2" color={colors.grey[100]}>
          {title}
        </Typography>
        <Typography
          sx={{ mt: "10px", mb: "10px" }}
          variant="h5"
          color={colors.greenAccent[400]}
        >
          {subtitle}
        </Typography>
      </Box>
    </div>
  );
};
