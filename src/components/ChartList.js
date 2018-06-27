import React from 'react';
import ChartItem from "./ChartItem.js";
import "../index.css";

const ChartList = (props) => {

  const chartListItems = props.chart.map((song, index) => {
    return <ChartItem key={index} value={index} song={song} songRef={song["link"][1]["attributes"]["href"]}/>
  })

  return (
    <div className='chart-list'>
      {chartListItems}
      <audio id="audio" hidden="true"></audio>
    </div>

  )
}

export default ChartList;
