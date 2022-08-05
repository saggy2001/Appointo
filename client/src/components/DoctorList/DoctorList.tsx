import React from 'react';
import { Link } from 'react-router-dom';
import "./DoctorList.min.css";

const DoctorList = () => {
  return (
    <div className='doctorListContainer'>
        <p className="header">Top Doctors</p>
        <div className="doctorListWrapper">
            <div className="doctorCardWrapper">
                <div className="doctorImg">
                    <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" alt="" />
                </div>
                <div className="doctorDetail">
                    <p className="doctorName">Dr. Joshua Somanigkir</p>
                    <p className="professionTitle">Heart Specialist</p>
                    <div className="ratings">
                        <p className="ratingText">&#9733; 4.0 - 50 Reviews</p>
                    </div>
                </div>
            </div>
        
            <div className="doctorCardWrapper">
                <div className="doctorImg">
                    <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" alt="" />
                </div>
                <div className="doctorDetail">
                    <p className="doctorName">Dr. Joshua Somanigkir</p>
                    <p className="professionTitle">Heart Specialist</p>
                    <div className="ratings">
                        <p className="ratingText">&#9733; 4.0 - 50 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="doctorListWrapper">
            <div className="doctorCardWrapper">
                <div className="doctorImg">
                    <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" alt="" />
                </div>
                <div className="doctorDetail">
                    <p className="doctorName">Dr. Joshua Somanigkir</p>
                    <p className="professionTitle">Heart Specialist</p>
                    <div className="ratings">
                        <p className="ratingText">&#9733; 4.0 - 50 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="doctorListWrapper">
            <Link to="/doctor" className="doctorCardWrapper">
                <div className="doctorImg">
                    <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" alt="" />
                </div>
                <div className="doctorDetail">
                    <p className="doctorName">Dr. Joshua Somanigkir</p>
                    <p className="professionTitle">Heart Specialist</p>
                    <div className="ratings">
                        <p className="ratingText">&#9733; 4.0 - 50 Reviews</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default DoctorList;