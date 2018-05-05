import styled from 'styled-components'

export const RocketInfo = styled.div`
  display: grid;
  grid-template-columns: 700px 700px;
  grid-template-rows: auto;
  grid-template-areas: "mainInfo details";
  padding: 50px 30px;
`;

export const MainInfo = styled.div`
  grid-area: mainInfo;
`;

export const Details = styled.div`
  grid-area: details;
`;

export const Date = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const Name = styled.p`
  font-size: 36px;
  font-weight: 600;
  color: #0f1112;
  letter-spacing: 1.5px;
  margin: 12px 0 5px 0;
  text-transform: uppercase;
`;

export const Counter = styled.p`
  margin: 5px 0;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Image = styled.img`
  margin-top: 30px;
`;
