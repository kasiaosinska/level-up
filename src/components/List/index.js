import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ListItem, Label, Value } from './styled';

const List = (props) => {
  return (
    <Wrapper>
      {props.data.map((item, i) => (
      <ListItem key={i}>
        <Label>{item.name}:</Label>
        <Value>{item.val}</Value>
        {item.valOne && <Value>{item.valOne}</Value>}
        {item.valTwo && <Value>/ {item.valTwo}</Value>}
      </ListItem>
      ))
      }
    </Wrapper>
  )
};

List.propTypes = {
  data: PropTypes.array,
};

List.defaultProps ={
  data: [],
};

export default List;