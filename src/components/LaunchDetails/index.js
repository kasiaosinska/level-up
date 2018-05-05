import React, { Component } from 'react'
import { RocketInfo, MainInfo, Details } from './styled'
import Header from '../../components/Header'

class LaunchDetails extends Component {
  render() {
    return (
      <div>
        <Header />
        <RocketInfo>
          <MainInfo>
            Main information
          </MainInfo>
          <Details>
            Details
          </Details>
        </RocketInfo>
      </div>
    )
  }

}

export default LaunchDetails