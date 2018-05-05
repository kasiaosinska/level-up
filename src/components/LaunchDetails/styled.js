import styled from 'styled-components'

export const RocketInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "mainInfo details";
  padding: 50px 30px;
  box-sizing: border-box;
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
  letter-spacing: 10px;
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

export const Title = styled.p`
  width: 100%;
  border-bottom: 1.5px solid #ccac5b;
  color: #ccac5b;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 10px;
  text-transform: uppercase;
  line-height: 50px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spasing: 0.5px;
  line-height: 20px;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
