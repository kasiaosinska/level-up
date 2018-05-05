import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  border-left: 1px dashed #a7a9ac;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  color: #a7a9ac;
  margin-left: 25px;
`;

export const Value = Label.extend`
  color: #0f1112;
  margin-left: 10px;
`;