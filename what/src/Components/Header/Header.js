import React from 'react'
import { StyledHeader } from './Header.style'
import Nav from './HeaderNav/Nav'


function Header() {
  return (
    <StyledHeader>
      <Nav/>
    </StyledHeader>
  )
}

export default Header
