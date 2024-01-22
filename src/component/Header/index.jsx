import React from 'react'
import Navbar from '../Navbar/index'
import Logo from '../Logo'

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed',
  top: '0',
  width: '80%',
  height: '100px',
  alignItems: 'center',
}

const Header = () => {
  return (
    <div style={headerStyle}>
      <Logo />
      <Navbar />
    </div>
  )
}

export default Header