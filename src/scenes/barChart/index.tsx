import React from "react";
import { TitleComponent } from "../../components/TitleComponent";
import BarChartComponent from "../../components/ChartsComponents/BarChartComponent";

const BarChart = () => {
  return (
    <>
      <TitleComponent name="bar" />
      <BarChartComponent />
    </>
  );
};

export default BarChart;
