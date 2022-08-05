import React from 'react';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import VerifyOTPPage from './pages/VerifyOTPPage';
import MainPage from './pages/MainPage';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/verify' element={<VerifyOTPPage />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
