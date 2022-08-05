import React from 'react'
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import AppointmentDetailBox from '../../components/AppointmentDetailBox/AppointmentDetailBox';
import HorizontalLadder from '../../components/HorizontalLadder/HorizontalLadder';
import "./SchedulePage.min.css";

const SchedulePage = () => {
  return (
    <div className="schedulePageContainer">
        <div className="pageHeading">Schedule</div>
        <HorizontalLadder />
        <div className="cardListWrapper">
            <AppointmentCard dark={false} />
            <AppointmentCard dark={false} />
            <AppointmentCard dark={false} />
            <AppointmentCard dark={false} />
        </div>
    </div>
  )
}

export default SchedulePage;