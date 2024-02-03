import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-center items-center gap-5 text-yellow-500">
        <li className='list-none'>
          <a href="http://localhost:3000/" className='no-underline'>
            Home
          </a>
        </li>
        <li className='list-none'>
          <a href="http://localhost:3000/" className='no-underline'>
            Products
          </a>
        </li>
        <li className='list-none'>
          <a href="http://localhost:3000/" className='no-underline'>
            Contact
          </a>
        </li> 
      </ul>
    </div> 
  )
}

export default Navbar;
