import React from 'react'
import Logo from '../Logo'
import SearchBar from '../SearchBar'
import Cart from '../Cart'

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
      <SearchBar />
      <Cart />
    </div>
  )
}

export default Header