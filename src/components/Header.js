import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HearderStyle>
      <h1>Hi, I'm Idrees</h1>
    </HearderStyle>
  )
}
const HearderStyle = styled.section`
  display: grid;
	text-align: center;
  align-content: center;
  min-height:10vh;
  background-color: var(--mainColor);
	overflow:auto;
`
export default Header