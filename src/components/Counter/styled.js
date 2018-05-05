import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 15px;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: #2ecc71;
  color: #ecf0f1;
  font-size: 18px;
  transition: background-color .3s;
  cursor: pointer;
  
  &:hover {
    background-color: #27ae60;
  }
}
`;

export const Timer = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

export const SuccessText = styled.h5`
  font-size: 17px;
`;