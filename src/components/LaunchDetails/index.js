import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RocketInfo, MainInfo, Details, Date, Name, Counter, Image } from './styled'
import Header from '../../components/Header'
import dateConverter from '../../utils/dateCoverter'

class LaunchDetails extends Component {

  render() {
    const {launch_date_utc, rocket, details, links} = this.props.data;
    const date = dateConverter(launch_date_utc);
    return (
      <div>
        <Header/>
        <RocketInfo>
          <MainInfo>
            <Date>{date}</Date>
            <Name>{rocket.rocket_name}</Name>
            <Counter>Counter</Counter>
            <Image src={links.mission_patch_small} alt='rocket-patch'/>
          </MainInfo>
          <Details>
            Details
            <p>{details}</p>
            Rocket
          </Details>
        </RocketInfo>
      </div>
    )
  }
}

LaunchDetails.propTypes = {
  data: PropTypes.object,
};

LaunchDetails.defaultProps = {
  data: {},
};

export default LaunchDetails