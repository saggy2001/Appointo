import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { IoPeople } from 'react-icons/io5';
import BackButton from '../../components/BackButton/BackButton';
import TextButton from '../../components/TextButton/TextButton';
import './DoctorPage.min.css';

const DoctorPage = () => {
  return (
    <div className="doctorPageContainer">
        <BackButton />
        <div className="doctorPageTop">
            <div className="pageTopWrapper">
                <div className="profilePicture">
                    <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" alt="" />
                </div>
                <p className="doctorName">Dr. Viola Dunn</p>
                <p className="domainName">Therapist</p>
                <button className="chatButton">
                    <BsFillChatDotsFill fontSize={22} />
                </button>
            </div>
        </div>
        <div className="doctorPageBottom">
            <div className="pageBottomWrapper">
                <div className="aboutDoctorWrapper">
                    <p className="heading">About Doctor</p>
                    <p className="doctorDetail">Dr. Viola Dunn's is an experinced specialist who is constantly working on improving her skills.</p>
                    <div className="statDetailsContainer">
                        <div className="statBox">
                            <p className="statTitle">Patients</p>
                            <div className="statDetail">
                                <div className="statIcon">
                                    <IoPeople fontSize={20} />
                                </div>
                                <p className="statValue">1000+</p>
                            </div>
                        </div>
                        <div className="statBox">
                            <p className="statTitle">Experiences</p>
                            <div className="statDetail">
                                <div className="statIcon">
                                    <IoPeople fontSize={20} />
                                </div>
                                <p className="statValue">5 Years</p>
                            </div>
                        </div>
                        <div className="statBox">
                            <p className="statTitle">Reviews</p>
                            <div className="statDetail">
                                <div className="statIcon">
                                    <IoPeople fontSize={20} />
                                </div>
                                <p className="statValue">5.0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="appointmentScheduleContainer">
                    <p className="heading">Working Time</p>
                    <p className="timeDetail">Mon-Fri, Morning 8 AM - Night 8 PM</p>

                    <div className="scheduleHeader">
                        <p className="heading">Schedule</p>
                        <select className='monthSelector' name="May 2021" id="">
                            <option>May 2021</option>
                            <option>June 2021</option>
                            <option>July 2021</option>
                        </select>
                    </div>
                    <div className="scheduleScroller">
                        <button className="scheduleDateBox">
                            <p className="day">Mon</p>
                            <p className="date">12</p>
                        </button>
                        <button className="scheduleDateBox">
                            <p className="day">Tue</p>
                            <p className="date">13</p>
                        </button>
                        <button className="scheduleDateBox">
                            <p className="day">Wed</p>
                            <p className="date">14</p>
                        </button>
                        <button className="scheduleDateBox">
                            <p className="day">Thu</p>
                            <p className="date">15</p>
                        </button>
                        <button className="scheduleDateBox">
                            <p className="day">Fri</p>
                            <p className="date">16</p>
                        </button>
                        <button className="scheduleDateBox">
                            <p className="day">Sat</p>
                            <p className="date">17</p>
                        </button>
                        <button className="scheduleDateBox">
                            <p className="day">Sun</p>
                            <p className="date">18</p>
                        </button>
                    </div>
                    <div className="buttonWrapper">
                        <TextButton borderRadius={5} width="100%" padding={10} color="#fff" background='#575ce5' border="none">Book Appointment</TextButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorPage;