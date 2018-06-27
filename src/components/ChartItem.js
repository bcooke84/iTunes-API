import React from 'react';
import "../index.css";

class ChartItem extends React.Component {

  render () {
    return (
      <div className="chart-item">

        <div className="zoom">
        <h1 className="position-number">{this.props.value + 1}</h1>
        {console.log(this.props.songRef)}

        <img onMouseEnter={() => this.playSound(this.props.songRef)}
          onMouseLeaver={() => this.stopSound(this.props.songRef)} className="artwork" src={this.props.song["im:image"][2]["label"]} alt="album artwork"></img>
        </div>

        <a className="link" href={this.props.song["im:artist"]["attributes"]["href"]}><p className = "artist-name">{this.props.song["im:artist"]["label"]}</p></a>

        <a className="link" href={this.props.song["im:collection"]["link"]["attributes"]["href"]}><p>{this.props.song["im:name"]["label"]}</p></a>

        <p className="release-date-paragraph"><span className="release-date">Release Date:</span> {this.props.song["im:releaseDate"]["attributes"]["label"]}</p>

      </div>
    )
  }

  playSound(soundobj) {
    let thissound= new Audio(soundobj);
    thissound.play();
  }

  stopSound(soundobj) {
    let thissound= new Audio(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
  }

}

export default ChartItem;
