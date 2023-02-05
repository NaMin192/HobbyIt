import React from 'react'
import { StyledNavLogo } from './Nav.style'
import logo from '../../../assets/image/hobby-it.svg'

function NavLogo() {
  return (
    <StyledNavLogo>
      <button>
        <img src={logo} alt = 'Hobby-it logo' color='orange'/>
      </button>
    </StyledNavLogo>
  )
}

export default NavLogo
