import React, { ReactChild } from 'react';
import {FaClinicMedical} from "react-icons/fa";
import "./CategoryBox.min.css";

interface CategoryBoxProps{
  icon: ReactChild;
  text: string;
}

const CategoryBox:React.FC<CategoryBoxProps> = ({icon, text}) => {
  return (
    <div className='categoryBox' >
      <div className='categoryIcon' >
        {icon}
      </div>
      <p className="categoryText">{text}</p>
    </div>
  )
}

export default CategoryBox;