import axios from 'axios';
import React, { ReactEventHandler, useCallback, useState } from 'react';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaAddressBook, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox/InputBox';
import TextButton from '../../components/TextButton/TextButton';
import { validateName, validatePhoneNumber } from '../../util/util';
import './RegisterPage.min.css';

interface InputField{
  value: string;
  errorMessage?: string;
}

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<InputField>();
  const [phone, setPhone] = useState<InputField>();
  const [email, setEmail] = useState<InputField>();
  const [address, setAddress] = useState<InputField>();


  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({...name, value: e.target.value, errorMessage: !validateName(e.target.value) ? 'Write Proper Name': ''});
  }

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone({...phone, value:e.target.value, errorMessage: !validatePhoneNumber(e.target.value) ? 'Enter a Valid Mobile Number':'' });
  }

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({...email, value:e.target.value });
  }

  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({...address, value: e.target.value});
  }


  const onRegister = useCallback(
    async () => {
      try{
        console.log("Hii");
        const res = await axios.post('/api/user', {
          name,
          phone, 
          email,
          address
        });

        console.log(res);
        console.log(res.data);
        if(res.status === 200){
          alert("Registered Successfully");
          // navigate("/login");
        }else{
          alert(res.data.message);
        }

      }catch(err: any){
        console.log(err);
        console.log(err.response.data);
      }
    },
    [name, phone, email, address, navigate],
  );
  


  return (
    <div className="registerContainer">
        <div className="registerWrapper">
            <p className="title">Register in Appointo</p>
            <InputBox type='text' icon={<FaUserAlt />} placeholder='Name' onChange={onNameChange} error={!!name?.errorMessage} errorMessage={name?.errorMessage} />
            <InputBox type='text' icon={<BsFillPhoneFill />} placeholder='Mobile Number' onChange={onPhoneChange} error={!!phone?.errorMessage} errorMessage={phone?.errorMessage} />
            <InputBox type='text' icon={<MdEmail />} placeholder='Email' onChange={onEmailChange} />
            <InputBox type='text' icon={<FaAddressBook />} placeholder='Address' onChange={onAddressChange} />
            <TextButton width="100%" borderRadius={5} background="#575ce5" border="none" color='#fff' padding={10} onClick={onRegister} disable={!!name?.errorMessage || !!phone?.errorMessage || !!email?.errorMessage || !!address?.errorMessage}  >Register</TextButton>
            <p className="loginText">Already Have an account.<Link to="/login">Login</Link></p>  
        </div>
    </div>
  )
}

export default RegisterPage;