import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';
import SearchCard from '../components/SearchCard/SearchCard';
import './styles/SearchPage.css';

const obj = {
  clinicName: 'Sagar Clinic',
  timing:{
    dayOfWeek: 'Mon',
    isOpen: true,
    openingTime: 1100,
    closingTime: 2000,
  },
  address: '26/27 Dr. Gangadhar Mukherjee Road, Howrah - 711101'
}

const SearchPage = () => {
  return (
    <div className='search-page-container' >
      <div className="searchBox">
        <InputGroup size='lg' >
            <InputLeftElement
              pointerEvents='none'
              _focus={{color: 'brand.500'}}
              children={<Search2Icon />}
            />
            <Input type='search' placeholder='Search Clinics' _focus={{borderColor: 'brand.500', boxShadow: '0 0 0 1px #bace24', zIndex: 1}} />
        </InputGroup>
        <hr className='hrLine'/>
      </div>
      <div className="searchListWrapper">
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />
        <SearchCard {...obj} />




      </div>
       
    </div>
  )
}

export default SearchPage;