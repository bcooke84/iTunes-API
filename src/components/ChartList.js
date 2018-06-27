import React from 'react';
import ChartItem from "./ChartItem.js";
import "../index.css";

class ChartList extends React.Component {


  // GET ACCESS TO THE PROPS (ARRAY OF SONGS), AND MAP OVER THEM
  render () {
    const chartListItems = this.props.chart.map((song, index) => {
      return <ChartItem key={index} value={index} song={song} songRef={song["link"][1]["attributes"]["href"]}/>
    })

    return (
      <div className='chart-list'>{chartListItems}</div>
    )
  }

}

export default ChartList;
