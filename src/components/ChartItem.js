import React from 'react';
import "../index.css";

class ChartItem extends React.Component {

  render () {
    return (
      <div className="chart-item" onMouseEnter={() => this.playSound(this.props.songRef)}
        onMouseLeave={() => this.stopSound(this.props.songRef)}>

        <div className="zoom">
        <h1 className="position-number">{this.props.value + 1}</h1>
        {console.log(this.props.songRef)}

        <img className="artwork" src={this.props.song["im:image"][2]["label"]} alt="album artwork"></img>
        </div>

        <a className="link" href={this.props.song["im:artist"]["attributes"]["href"]}><p className = "artist-name">{this.props.song["im:artist"]["label"]}</p></a>

        <a className="link" href={this.props.song["im:collection"]["link"]["attributes"]["href"]}><p>{this.props.song["im:name"]["label"]}</p></a>

        <p className="release-date-paragraph"><span className="release-date">Release Date:</span> {this.props.song["im:releaseDate"]["attributes"]["label"]}</p>

      </div>
    )
  }

  playSound(songClip) {
    const audio = document.getElementById("audio")
    audio.src = songClip
    audio.play();
  }

  stopSound(songClip) {
    const audio = document.getElementById("audio")
    audio.src = songClip
    audio.pause();
  }

}

export default ChartItem;
