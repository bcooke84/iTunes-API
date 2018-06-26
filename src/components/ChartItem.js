import React from 'react';
import "./ChartItem.css";

class ChartItem extends React.Component {

  render () {
    return (
      <div className="chart-item">
        <h1>{this.props.value + 1}</h1>
        <a className="link" href={this.props.song["link"][1]["attributes"]["href"]}><img className="artwork" src={this.props.song["im:image"][2]["label"]} alt="album artwork"></img></a>
        <a className="link" href={this.props.song["im:artist"]["attributes"]["href"]}><p>{this.props.song["im:artist"]["label"]}</p></a>
        <a className="link" href={this.props.song["im:collection"]["link"]["attributes"]["href"]}><p>{this.props.song["im:name"]["label"]}</p></a>
        <p>Release Date: {this.props.song["im:releaseDate"]["attributes"]["label"]}</p>
        {console.log(this.props.song)}
      </div>
    )
  }

}

export default ChartItem;
