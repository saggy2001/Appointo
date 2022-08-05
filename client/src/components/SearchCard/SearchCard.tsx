import React from 'react';
import './SearchCard.css';

interface SearchCardProps{
    clinicName: string;
    timing:{
        dayOfWeek: string;
        isOpen: boolean;
        openingTime: number;
        closingTime: number;
    }
    ,
    address: string;

}

const SearchCard = (prop: SearchCardProps) => {
  return (
    <div className="searchCard">
        <p className='title' >{prop.clinicName}</p>
        <p className='address' >{prop.address}</p>
        <div className="tagContainer">
            <div className="timingTag">Mon</div>
            <div className='timingTag'>10:00 AM - 8:00 PM</div>
        </div> 
    </div>
  )
}

export default SearchCard