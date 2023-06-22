import { mockGeographyData } from "../../data/mockData";
import { Box } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { UseGetChartTheme } from "./hooks/chartColorTheme";

const GeographyChartComponent = () => {
  const { chartTheme } = UseGetChartTheme();
  return <div></div>;
};

export default GeographyChartComponent;
