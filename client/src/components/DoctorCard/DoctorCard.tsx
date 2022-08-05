import React from 'react';
import './DoctorCard.css';

const DoctorCard = () => {
  return (
    <div className="doctorCard">
        <div className="doctorImageContainer">
            <img src="https://hellojivan.com/assets/websites/assets/img/doctors/doctor-thumb-02.jpg" alt="" className="doctorImage" />
        </div>
        <div className="doctorDetails">
            <p className="doctorName">Dr. Cristopher Joseph</p>
            <div className="tagContainer">
                <div className="doctorTag">M.B.B.S</div>
                <div className="doctorTag">Eye Specialist</div>
            </div>
        </div>
    </div>
  )
}

export default DoctorCard;