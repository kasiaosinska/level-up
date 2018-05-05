import styled from 'styled-components'

export const RocketInfo = styled.div`
  display: grid;
  grid-template-columns: 700px 700px;
  grid-template-rows: auto;
  grid-template-areas: "mainInfo details";
`

export const MainInfo = styled.div`
  grid-area: mainInfo;
`

export const Details = styled.div`
  grid-area: details;
`
