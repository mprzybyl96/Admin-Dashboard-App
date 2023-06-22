import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";

export const UseGetChartTheme = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartTheme = {
    axis: {
      legend: {
        text: {
          fill: colors.grey[100],
        },
      },
      domain: {
        line: {
          stroke: colors.grey[100],
        },
      },
      ticks: {
        line: {
          stroke: colors.grey[100],
          strokeWidth: 1,
        },
        text: { fill: colors.grey[100] },
      },
    },
    legends: {
      text: {
        fill: colors.grey[100],
      },
    },
    annotations: {
      text: {
        fill: colors.grey[100],
      },
    },
  };

  return { chartTheme };
};
