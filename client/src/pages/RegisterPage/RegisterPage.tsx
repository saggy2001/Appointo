import React from 'react';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaAddressBook, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox/InputBox';
import TextButton from '../../components/TextButton/TextButton';
import './RegisterPage.min.css';

const RegisterPage = () => {

  const navigate = useNavigate();
  return (
    <div className="registerContainer">
        <div className="registerWrapper">
            <p className="title">Register in Appointo</p>
            <InputBox type='text' icon={<FaUserAlt />} placeholder='Name' />
            <InputBox type='text' icon={<BsFillPhoneFill />} placeholder='Mobile Number' />
            <InputBox type='text' icon={<MdEmail />} placeholder='Email' />
            <InputBox type='text' icon={<FaAddressBook />} placeholder='Address' />
            <TextButton width="100%" borderRadius={5} background="#575ce5" border="none" color='#fff' padding={10} onClick={() => navigate("/login")} >Register</TextButton>
            <p className="loginText">Already Have an account.<Link to="/login">Login</Link></p>  
        </div>
    </div>
  )
}

export default RegisterPage;