import { ArrowForwardIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, GridItem, Heading, HStack, Icon, IconButton, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BiDonateBlood } from 'react-icons/bi';
import { AiFillMedicineBox } from 'react-icons/ai';
import { GiNotebook } from 'react-icons/gi';
import { FaHistory } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.min.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryScroller from '../../components/CategoryScroller/CategoryScroller';
import AppointmentDetailBox from '../../components/AppointmentDetailBox/AppointmentDetailBox';
import DoctorList from '../../components/DoctorList/DoctorList';

const HomePage = () => {
  return (
    <div className='homepageContainer'>
        <Navbar />
        <SearchBar />
        <CategoryScroller />
        <AppointmentDetailBox />
        <DoctorList />
    </div>
  )
}

export default HomePage;