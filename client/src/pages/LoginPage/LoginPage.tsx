import React, { useCallback, useEffect, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox/InputBox'
import Loader from '../../components/Loader/Loader';
import LogoBanner from '../../components/LogoBanner/LogoBanner';
import TextButton from '../../components/TextButton/TextButton';
import './LoginPage.css';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorUserName, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    setErrorUsername('');
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrorPassword('');
  }

  // const onLogin = useCallback(
  //   async () => {
  //     try{
  //     setIsLoading(true);
  //     setErrorUsername('');
  //     setErrorPassword('');
  //     initService();
  //     const res = await login(userName, password);
  //     console.log(res.data);
  //     if(res.status === 200){
  //       localStorage.setItem('token', res.data.data.access_token);
  //       navigate('/search');
  //     }else{
  //       alert("Something went wrong, Try Again!!!")
  //     }

  //     }catch(err:any){
  //       const result = (err as ErrorRes).response.data;
  //       console.log(result);
  //       if(result.data.reason === 'user_name'){
  //         setErrorUsername(result.data.message);
  //       }else if(result.data.reason === 'password'){
  //         setErrorPassword(result.data.message);
  //       }else{
  //         alert(result.data.message);
  //       }
  //     }finally{
  //       setIsLoading(false);
  //     }
  //   },
  //   [userName, password, navigate],
  // );

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     navigate('/search');
  //   }
  // }, [navigate])
  
  
  return (
    <div className='loginContainer'>
      <div className="loginHeader">
        <LogoBanner />
      </div>
      <div className="loginBox">
        <p className='title' >Welcome to Appointo</p>
        <div className="inputWrapper">
          <InputBox type='text' error={!!errorUserName} errorMessage="This username doesn't exist" value={userName} onChange={onUsernameChange} icon={<FaUserAlt />} placeholder='Enter the Username' />
          <InputBox type='password' error={!!errorPassword} errorMessage="Password is wrong" value={password} onChange={onPasswordChange} icon={<RiLockPasswordFill />} placeholder='Enter the Password' />
          <TextButton width='100%' borderRadius={5} padding={10} color="#fff" background="#575ce5" border="none" disable={!userName || !password} onClick={() => {
            console.log("Hii");
            navigate("/");
          }} >Login</TextButton>
          <p className="registerText">Not registered yet? <Link to="/register">Create an Account</Link></p>
        </div>
      </div>
     
      {isLoading &&
        <div className="loaderContainer">
          <Loader width={60} height={60} borderWidth={4} />
        </div>
      }
      
    </div>
  )
}

export default LoginPage;