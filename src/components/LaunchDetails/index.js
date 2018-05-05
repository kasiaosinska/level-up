import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RocketInfo, MainInfo, Details, Date, Name, Counter, Image, Title, Text, ListWrapper } from './styled'
import Header from '../../components/Header'
import List from '../../components/List'
import dateConverter from '../../utils/dateCoverter'

const rocketDetails = [
  {
    name: 'Name',
    val: 'Rocket',
  },
  {
    name: 'aaa',
    val: 'aaa',
  },
  {
    name: 'height',
    val: '100kg',
  }
];

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
            <div>
              <Title>Details</Title>
              <Text>{details}</Text>
            </div>
            <div>
              <Title>Rocket</Title>
              <ListWrapper>
                <List data={rocketDetails} />
                <List data={rocketDetails} />
              </ListWrapper>
              <Text>{details}</Text>
            </div>
            <div>
              <Title>Launch Pad</Title>
              <ListWrapper>
                <List data={rocketDetails} />
                <List data={rocketDetails} />
              </ListWrapper>
              <Text>{details}</Text>
            </div>
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