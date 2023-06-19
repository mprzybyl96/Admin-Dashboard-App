import { Box, useTheme, Typography } from "@mui/material";
import { TitleComponent } from "../../components/TitleComponent";

import React from "react";
import AccordionBox from "./AccordionBox";

const FAQ = () => {
  return (
    <Box m="20px">
      <TitleComponent title="FAQ" subtitle="Frequently Asked Questions Page" />

      <AccordionBox title="An Important Question" />
      <AccordionBox title="Another Important Question" />
      <AccordionBox title="Your favourite Question" />
      <AccordionBox title="Dummy Question" />
      <AccordionBox title="Final Question" />
    </Box>
  );
};

export default FAQ;
