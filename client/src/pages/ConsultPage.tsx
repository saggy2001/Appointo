import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import DoctorCard from '../components/DoctorCard/DoctorCard';
import './styles/ConsultPage.css';

const ConsultPage = () => {
  return (
    <div className='consult-page-container' >
      <div className="searchBox">
        <InputGroup size='lg' >
            <InputLeftElement
              pointerEvents='none'
              _focus={{color: 'brand.500'}}
              children={<Search2Icon />}
            />
            <Input type='search' placeholder='Search Doctors' _focus={{borderColor: 'brand.500', boxShadow: '0 0 0 1px #bace24', zIndex: 1}} />
        </InputGroup>
        <hr className='hrLine'/>
        <div className="selectWrapper">
          <select defaultValue='none' >
            <option value='none' selected disabled >Select Category</option>
            <option>All</option>
            <option>Eye Specialist</option>
            <option>Ear Specialist</option>
            <option>Skin Specialist</option>
            <option>General Physician</option>
          </select>
        </div>
        
      </div>
      <div className="searchListWrapper">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />


      </div>
       
    </div>
  )
}

export default ConsultPage;