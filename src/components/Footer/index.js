import React from 'react';
import { Wrapper, List, ListEl, Text } from './styled';

const year = new Date().getFullYear();

const Footer = () =>
  <Wrapper>
    <List>
      <ListEl>Follow Spacex |</ListEl>
      <ListEl>Twitter</ListEl>
      <ListEl>Youtube</ListEl>
      <ListEl>Flickr</ListEl>
      <ListEl>Instagram</ListEl>
    </List>
    <Text>{year} Space exploration technologies corp.</Text>
  </Wrapper>
;

export default Footer;