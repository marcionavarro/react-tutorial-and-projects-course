import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import chart from "fusioncharts/fusioncharts.charts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, chart, FusionTheme);

const ChartComponent = ({data}) => {

  const chartConfigs = {
    type: "bar3d",
    width: 400,
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion"
      },
      data
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
