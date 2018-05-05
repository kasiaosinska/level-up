import React from 'react'
import LogoImg from '../../assets/space_x_logo_bw_centered.svg'
import Arrow from '../../assets/arrow_pointer.png'

import { Wrapper, Text, ArrowImg, Img, Link, Logo } from './styled'

const Header = () => {
  return (
    <Wrapper>
      <Link><Text><ArrowImg src={Arrow} />Go back</Text></Link>
      <Logo><Img src={LogoImg} /></Logo>
    </Wrapper>
  )
};

export default Header