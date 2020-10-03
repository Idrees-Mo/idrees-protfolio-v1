import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const Main = () => {
  return (
    <MainStyle>
      <Navbar />
    </MainStyle>
  )
}
const MainStyle = styled.section`
 min-height:80vh;
 width:90%;
 margin: 0 auto;
 background-color: var(--mainColor);
 border-bottom:1px solid var(--borderColor);

-webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
`

export default Main
