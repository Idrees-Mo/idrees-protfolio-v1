import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavbarStyle>
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </NavbarStyle>
  )
}

const NavbarStyle = styled.div`
  border-radius:5px 5px 0 0;
	grid-area:nav-wrapper;
	border-top: 1px solid var(--borderColor);
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--mainColor);
`

export default Navbar
