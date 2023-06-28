import { Email } from "@mui/icons-material";
import { useTheme, Box } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import StatBox from "../StatBox";
import { StatBoxProps } from "../../components.types";

const DashboardBox: React.FC<StatBoxProps> = ({
  title,
  subtitle,
  progress,
  increase,
  icon,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[400],
      }}
      gridColumn="span 3"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title={title}
        subtitle={subtitle}
        progress={progress}
        increase={increase}
        icon={icon}
      />
    </Box>
  );
};

export default DashboardBox;
