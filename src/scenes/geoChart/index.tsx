import { Box, colors, useTheme } from "@mui/material";
import GeographyChartComponent from "../../components/ChartsComponents/GeographyChartComponent";
import { TitleComponent } from "../../components/TitleComponent";
import { tokens } from "../../theme";

const GeoChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <TitleComponent name="geo" />
      <Box border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeographyChartComponent />
      </Box>
    </>
  );
};

export default GeoChart;
