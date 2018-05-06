import React, { Component } from 'react';
import LaunchDetails from './components/LaunchDetails';
import hasData from './utils/hasData';

class App extends Component {

  state = {
    details: {},
    rocket: {},
    launchPad: {},
  };

  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/launches/latest', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => this.setState({details: data}));

    fetch('https://api.spacexdata.com/v2/rockets/falcon9', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => this.setState({rocket: data}));

    fetch('https://api.spacexdata.com/v2/launchpads/ccafs_slc_40', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => this.setState({launchPad: data}));
  }

  render() {
    return(
    hasData(this.state.details) && hasData(this.state.rocket) && hasData(this.state.launchPad)?
      <div>
          <LaunchDetails
            data={this.state}
          />
      </div>
      : <div>Ładowanie...</div>
    )
  }
}

export default App;
