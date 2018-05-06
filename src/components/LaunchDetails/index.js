import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RocketInfo, MainInfo, Details, Date, Name, Image, Title, Text, ListWrapper, Links, Button, TitleCenter } from './styled';

import Counter from '../Counter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import List from '../../components/List';

import dateConverter from '../../utils/dateCoverter';

class LaunchDetails extends Component {

  render() {
    const { launch_date_utc, rocket, details, links } = this.props.data.details;
    const { description, name, company, height, diameter, mass, first_flight, country, success_rate_pct, cost_per_launch } = this.props.data.rocket;
    const { location } = this.props.data.launchPad;

    const date = dateConverter(launch_date_utc);
    const rocketDetailsPartOne = [
      {
        name: 'Name',
        val: name,
      },
      {
        name: 'Company',
        val: company,
      },
      {
        name: 'height',
        val: '',
        valOne: height.meters + 'M',
        valTwo: height.feet + 'FT',
      },
      {
        name: 'Diameter',
        val: '',
        valOne: diameter.meters + 'M',
        valTwo: diameter.feet + 'FT',
      },
      {
        name: 'Mass',
        val: '',
        valOne: mass.kg + 'KG',
        valTwo: mass.lb + 'LB',
      }
    ];
    const rocketDetailsPartTwo = [
      {
        name: 'First flight',
        val: first_flight,
      },
      {
        name: 'Country',
        val: country,
      },
      {
        name: 'Success Rate',
        val: success_rate_pct + '%',
      },
      {
        name: 'Cost Per Lauch',
        val: '$' + cost_per_launch,
      },
    ];
    const launchPadPartOne = [
      {
        name: 'Name',
        val: location.name,
      },
    ];
    const launchPadPartTwo = [
      {
        name: 'Location',
        val: location.region,
      },
    ];


    return (
      <div>
        <Header/>
        <RocketInfo>
          <MainInfo>
            <Date>{date}</Date>
            <Name>{rocket.rocket_name}</Name>
            <Counter time={launch_date_utc}/>
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
                <List data={rocketDetailsPartOne} />
                <List data={rocketDetailsPartTwo} />
              </ListWrapper>
              <Text>{description}</Text>
            </div>
            <div>
              <Title>Launch Pad</Title>
              <ListWrapper>
                <List data={launchPadPartOne} />
                <List data={launchPadPartTwo} />
              </ListWrapper>
              <Text>{this.props.data.launchPad.details}</Text>
            </div>
          </Details>
        </RocketInfo>
        <Links>
          <TitleCenter>Mission Links</TitleCenter>
          <Button href={links.reddit_campaign}>Reddit Campaign</Button>
          <Button href={links.presskit}>Presskit</Button>
          <Button href={links.video_link}>Mission video</Button>
        </Links>
        <Footer />
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

export default LaunchDetails;