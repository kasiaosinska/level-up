import React from 'react'
import { ListItem, Label, Value } from './styled'

const List = (props) =>
  props.data.map((item, i) => (
    <ListItem key={i}>
      <Label>{item.name}:</Label>
      <Value>{item.val}</Value>
    </ListItem>
  ));

export default List;