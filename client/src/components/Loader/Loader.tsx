import React from 'react';
import './Loader.css';

interface LoaderProps{
  width?: string | number;
  height?: string | number;
  borderWidth?: string | number;
}

const Loader:React.FC<LoaderProps> = ({width, height, borderWidth}) => {
  return (
    <span className='loader' style={{width, height, borderWidth}} ></span>
  )
}

export default Loader;