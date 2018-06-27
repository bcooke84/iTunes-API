import React from 'react';
import ChartList from '../components/ChartList.js'
import '../index.css';

class ChartBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      chart: []

    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
    .then(res => res.json())
    .then(allData => this.setState({chart: allData.feed.entry}));
  }


  render() {
    return (
      <div id="chart-box">
        <div id="header">
          <img id="logo" src={require("./iTunesLogo.png")} alt="iTunes logo"/>
          <h1 id="page-heading">Top 20 Chart</h1>
        </div>
        <ChartList chart={this.state.chart}/>
      </div>
    )
  }

}

export default ChartBox;
