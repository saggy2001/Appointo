import React from 'react';
import {FiSearch} from 'react-icons/fi';
import './SearchBar.min.css';

const SearchBar = () => {
  return (
    <div className="searchBarContainer" >
        <div className="searchIcon">
          <FiSearch fontSize={22} />
        </div>
        <input disabled className="searchBarInput" type="text" placeholder="Search Clinics or Doctors" />
    </div>
  )
}

export default SearchBar;