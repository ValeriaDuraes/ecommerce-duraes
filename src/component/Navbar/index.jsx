import React from 'react'

const categoriesList = {
  display: 'flex',
  gap: '15px',
  listStyle: 'none',
  alignItems: 'center',
  justifyContent: 'center',
}

const ancorStyles = {
  textDecoration: 'none',
}

const Navbar = () => {
  return (
    <div>
      <ul className="text-yellow-500" style={categoriesList}  >
        <li><a href="http://" style={ancorStyles}>Home</a></li>
        <li><a href="http://" style={ancorStyles}>Products</a></li>
        <li><a href="http://" style={ancorStyles}>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar