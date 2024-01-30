import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form>
      <input 
      className="w-[550px] p-[8px] rounded-full m-2 bg-gray-400"
      type="search" 
      value={ searchValue }
      placeholder="Buscar produtos..."
      onChange={({target}) => setSearchValue(target.value)}
      required
      />
      
      <button type="submit" className='search_button'>
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar;
