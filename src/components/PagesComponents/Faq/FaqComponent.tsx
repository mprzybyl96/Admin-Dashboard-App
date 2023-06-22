import { Box, useTheme, Typography } from "@mui/material";

import AccordionBox from "./AccordionBox";

const FaqComponent = () => {
  return (
    <Box m="20px">
      <AccordionBox title="An Important Question" />
      <AccordionBox title="Another Important Question" />
      <AccordionBox title="Your favourite Question" />
      <AccordionBox title="Dummy Question" />
      <AccordionBox title="Final Question" />
    </Box>
  );
};

export default FaqComponent;
