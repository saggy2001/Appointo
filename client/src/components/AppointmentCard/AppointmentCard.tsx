import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineDateRange } from 'react-icons/md';
import TextButton from '../TextButton/TextButton';
import "./AppointmentCard.min.css";

interface AppointmentCardProps{
    dark: boolean;
}

const AppointmentCard:React.FC<AppointmentCardProps> = ({dark}) => {
  return (
    <div className="appointmentCardContainer">
        <div className={dark ? "appointmentCard":"appointmentCardLight"}>
            <div className="cardHeader">
                <div className="doctorImg">
                <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" alt="" />
                </div>
                <div className="doctorDetail">
                <p className="doctorName">Dr. Muhammed Syahid</p>
                <p className="professionalTitle">Dental Specialist</p>
                </div>
            </div>
            <div className="cardDetail">
                <div className="dateDetail">
                <div className="icon">
                    <MdOutlineDateRange size={16} />
                </div>
                <p className="textDetail">Monday, July 29</p>
                </div>
                <div className="dateDetail">
                <div className="icon">
                    <BiTimeFive size={16} />
                </div>
                <p className="textDetail">11:00 - 12:00 AM</p>
                </div>
            </div>
            <div className="buttonWrapper">
                <TextButton width="45%" fontSize={14}>Cancel</TextButton>
                <TextButton width="45%" background='#00d1e9' border='inherit' color='#fff' fontSize={14} >Reschedule</TextButton>
            </div>
        </div>
    </div>
  )
}

export default AppointmentCard;