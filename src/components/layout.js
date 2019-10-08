import React from 'react'
import Container from './container'
import Navbar from './navbar/navbar'


export default ({ children }) => {
  return (
    <Container>
      <Navbar/>
      {children}
    </Container>
  )
}