import React from 'react';
import { FaClinicMedical } from 'react-icons/fa';
import CategoryBox from './CategoryBox/CategoryBox';
import doctorIcon from  '../../assets/images/doctor.svg';
import './CategoryScroller.min.css';
import { MdHealthAndSafety } from 'react-icons/md';
import { CgPill } from 'react-icons/cg';

const CategoryScroller = () => {
  return (
    <div className='categoryScrollerContainer' >
      <CategoryBox icon={<FaClinicMedical size={20} />} text="Clinics" />
      <CategoryBox icon={<img src={doctorIcon} width={20} height={20} alt="" />} text="Doctors" />
      <CategoryBox icon={<MdHealthAndSafety size={20} />} text="Donate" />
      <CategoryBox icon={<CgPill size={20} />} text="Medicines" />
    </div>
  )
}

export default CategoryScroller;