import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #0f1112;
  display: grid;
  width: 100%;
  grid-template-columns: 200px auto;
  padding: 10px;
  box-sizing: border-box;
`

export const Text = styled.a`
  color: #ccac5b;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
`

export const ArrowImg = styled.img`
  margin-right: 10px;
  &:after {
    content:"aaaa";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    border-top: 1px solid #ccac5b;
    width: 50px;
  }
`

export const Img = styled.img`
  width: 20%;
`

export const Logo = styled.div`
  text-align: center;
  margin-left: -200px;
`

export const Link = styled.div`
  align-self: center;
`