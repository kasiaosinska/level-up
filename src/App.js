import React, { Component } from 'react';
import LaunchDetails from './components/LaunchDetails'
import hasData from './utils/hasData'

class App extends Component {

  state = {
    details: {},
  };

  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/launches/latest', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => this.setState({details: data}))
  }

  render() {
    return(
    hasData(this.state.details) ?
      <div>
          <LaunchDetails
            data={this.state.details}
          />
      </div>
      : <div>Ładowanie...</div>
    )
  }
}

export default App;
