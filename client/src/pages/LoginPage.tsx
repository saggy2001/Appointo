import React from 'react';
import { Box, Button, Center, Flex, Grid, GridItem, Heading, Image, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import loginScreenImage from "../assets/images/loginScreenImage.svg";
import { PhoneIcon } from '@chakra-ui/icons';

const LoginPage = () => {
  return (
    <Grid width="100vw" height="100vh" templateRows={{base: '1fr 1fr', md: '1fr'}} templateColumns={{md: '1fr 1fr'}} >
        <GridItem display="flex" justifyContent="center" alignItems="center" w='100%'>
          <Image src={loginScreenImage} width="80%" maxWidth={400} alt="" />
        </GridItem>
        <GridItem display="flex" alignItems="center" justifyContent="center" w='100%'>
          <VStack width="80%" maxWidth={400} spacing={6} >
            <Heading mb={4} textAlign="center" size="xl" letterSpacing={1.2} color='brand.500' >Welcome to Appointo</Heading>
            <InputGroup colorScheme='brand' >
                <InputLeftElement
                  pointerEvents='none'
                  children={<PhoneIcon color='gray.400' />}
                />
                <Input type='tel' placeholder='Phone number' colorScheme='brand'  _focus={{borderColor: 'brand.500', boxShadow: '0 0 0 1px #bace24', zIndex: 1}} />
            </InputGroup>
            <Button width="100%" colorScheme='brand' _focus={{boxShadow: 'none'}} variant="solid" >Get OTP</Button>
          </VStack>
        </GridItem>
    </Grid>
  )
}

export default LoginPage;