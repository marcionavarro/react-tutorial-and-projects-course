import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import chart from "fusioncharts/fusioncharts.charts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, chart, FusionTheme);

const ChartComponent = ({data}) => {

  const chartConfigs = {
    type: "pie3d",
    width: '100%',
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "fusion",
        decimals:0,
        pieRadius:"45%",
        // paletteColors: '#F0DB4F'
      },
      data
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
