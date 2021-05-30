import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMax}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
}

export default Chart;
