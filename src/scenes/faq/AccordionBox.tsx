import { ExpandMoreOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

interface Props {
  title: string;
}

const AccordionBox: React.FC<Props> = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionBox;
