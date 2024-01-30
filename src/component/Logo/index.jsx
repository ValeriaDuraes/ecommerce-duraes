import logo from '../../assets/bee_logo.jpg';
import React from 'react';

const imageStyle = {
  display: 'flex',
  height: '80px',
  width: '100px',
}

const Logo = () => {
  return (
    <div>
      <img
      style={imageStyle}
      src={logo} 
      alt="Logo Bee-commerce" 
      className="rounded-full"
      />
    </div>
  );
}

export default Logo;

