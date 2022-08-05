import React from 'react'
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import "./AppointmentDetailBox.min.css";

const AppointmentDetailBox = () => {
  return (
    <div className='appointmentBoxContainer'>
      <div className="header">
        <p className='headerText'>Appointment Today</p>
        <Link className='seeAllLink' to="/#" >See All</Link>
      </div>
      <div className="appointmentBoxWrapper">
        <AppointmentCard dark />
      </div>
    </div>
  )
}

export default AppointmentDetailBox;