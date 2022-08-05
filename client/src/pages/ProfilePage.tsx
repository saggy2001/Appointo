import React from 'react';
import { AiFillMobile } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { FaBirthdayCake, FaMobileAlt } from 'react-icons/fa';
import { MdOutlineBloodtype } from 'react-icons/md';
import './styles/ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className='profile-page-con' >
      <div className='profile-picture'>
        <img src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
      </div>
      {/* <h2 className='title' >Sagar Shaw</h2> */}
      <div className='tabContainer' >
        <div className='detailTab'>
          <div className="leftIcon">
            <BiUser size={24} />
          </div>
          <div className="detail">Sagar Shaw</div>
        </div>
        <div className='detailTab'>
          <div className="leftIcon">
            <FaBirthdayCake size={24} />
          </div>
          <div className="detail">13/01/2001</div>
        </div>
        <div className='detailTab'>
          <div className="leftIcon">
            <FaMobileAlt size={24} />
          </div>
          <div className="detail">8444989260</div>
        </div>
        <div className='detailTab'>
          <div className="leftIcon">
            <MdOutlineBloodtype size={24} />
          </div>
          <div className="detail">O+</div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;