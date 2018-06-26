import React from 'react';
import ChartList from '../components/ChartList.js'
import '../components/ChartItem.css';

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
      <ChartList chart={this.state.chart}/>
    )
  }

}

export default ChartBox;
