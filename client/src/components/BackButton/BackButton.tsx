import React from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import './BackButton.min.css';

const BackButton = () => {
  return (
    <button className="backButton">
        <IoChevronBackOutline color='#fff' fontSize={22} />
    </button>
  )
}

export default BackButton;