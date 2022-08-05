import React from 'react';
import pusle_logo from '../../assets/images/loginScreenImage.svg';
import './LogoBanner.min.css';

const LogoBanner = () => {
  return (
    <div className="bannerContainer">
        <div className='bannerWrapper' >
            <img src={pusle_logo} alt='' />
        </div>
    </div>
  )
}

export default LogoBanner;