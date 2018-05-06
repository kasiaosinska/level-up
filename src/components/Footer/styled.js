import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 50px;
  background-color: #22272b;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const List = styled.ul`
  color: #a7a9ac;
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 100px;
  display: flex;
`;

export const ListEl = styled.li`
  margin-right: 15px;
  
  &:first-child {
    color: #666666; 
  }
`;

export const Text = styled.span`
  color: #666666;
  line-height: 100px;
`;

