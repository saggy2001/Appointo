import React, { ReactNode } from 'react';
import './InputBox.min.css';

interface InputBoxProp{
onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
error?: boolean;
errorMessage?: string;
placeholder: string;
icon: ReactNode;
type: 'text' | 'password';
width?: string | number;
maxWidth?: string | number;
minWidth?: string | number;
margin?: string | number;
marginLeft?: string | number;
marginRight?: string | number;
boxShadow?: string;
value?: string;
}

const InputBox:React.FC<InputBoxProp> = ({onChange, error, errorMessage,placeholder, icon, type, minWidth, maxWidth, width, margin, marginLeft, marginRight, boxShadow, value}) => {
  return (
    <div className='inputBox' style={{minWidth, maxWidth, width, margin, marginRight, marginLeft}} >
        <div className="inputIcon">
            {icon}
        </div>
        <input className={error ? 'inputField inputError':'inputField'} value={value} type={type} placeholder={placeholder} onChange={onChange} style={{boxShadow}} ></input>
        {error ? <p className='errorMessage'>{errorMessage}</p> : null}
    </div>
  )
}

export default InputBox