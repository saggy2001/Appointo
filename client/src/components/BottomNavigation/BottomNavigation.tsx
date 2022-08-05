import React, { AnchorHTMLAttributes, useEffect, useRef } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Icon, IconButton, Text, VStack } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { 
    FaBriefcaseMedical
 } from 'react-icons/fa';
 import { 
    CgProfile
 } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import {RiHome5Fill} from "react-icons/ri";
import {GoCalendar} from "react-icons/go";
import {BsChatLeftDots} from "react-icons/bs";
import "./BottomNavigation.min.css";
import { FiSettings } from 'react-icons/fi';
import { TypeReference } from 'typescript';

 
const BottomNavigation = () => {
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        console.log(linkRef.current);
        linkRef.current?.focus();
      
    }, [linkRef])
    

  return (
    <div className="bottomNavigationContainer">
        <div className="bottomNavigationWrapper">
            <Link to="/" className="navigationTab" ref={linkRef} >
                <div className="navigationIcon">
                    <RiHome5Fill fontSize={20} />
                </div>
                {/* <p className="tabHeading">Home</p> */}
            </Link>
            <Link to="/schedule" className="navigationTab">
                <div className="navigationIcon">
                    <GoCalendar fontSize={20} />
                </div>
                {/* <p className="tabHeading">Home</p> */}
            </Link>
            <Link to="/#" className="navigationTab">
                <div className="navigationIcon">
                    <BsChatLeftDots fontSize={20} />
                </div>
                {/* <p className="tabHeading">Home</p> */}
            </Link>
            <Link to="/#" className="navigationTab">
                <div className="navigationIcon">
                    <FiSettings fontSize={20} />
                </div>
                {/* <p className="tabHeading">Home</p> */}
            </Link>
        </div>
    </div>
  )
}

export default BottomNavigation;