import React from 'react';
import './TextButton.min.css'

interface TextButtonProps{
    background?: string;
    border?: string;
    fontSize?: string | number;
    color?: string;
    width?: string | number;
    borderRadius?: string | number;
    padding?: number | string;
    disable?: boolean;
    maxWidth?: number | string;
    children: JSX.Element | string ;
    onClick?: () => void;
}

const TextButton:React.FC<TextButtonProps> = ({ background, border, fontSize, color, width, borderRadius, padding,disable, maxWidth, children, onClick}) => {
  return (
    <button className="textButton" disabled={disable} style={{background, border, fontSize, color, width, borderRadius, padding, maxWidth}} onClick={onClick} >{children}</button>
  )
}

export default TextButton;