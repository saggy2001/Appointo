import React from 'react';
import { Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Input, InputGroup, InputLeftElement, PinInput, PinInputField, VStack } from '@chakra-ui/react';
import loginScreenImage from "../assets/images/loginScreenImage.svg";

const VerifyOTPPage = () => {
  return (
    <Grid width="100vw" height="100vh" templateRows={{base: '1fr 1fr', md: '1fr'}} templateColumns={{md: '1fr 1fr'}} >
        <GridItem display="flex" justifyContent="center" alignItems="center" w='100%'>
          <Image src={loginScreenImage} width="80%" maxWidth={400} alt="" />
        </GridItem>
        <GridItem display="flex" alignItems="center" justifyContent="center" w='100%'>
          <VStack width="80%" maxWidth={400} spacing={6} >
            <Heading mb={4} textAlign="center" size="xl" letterSpacing={1.2} color='brand.500' >Welcome to Appointo</Heading>
            <HStack spacing={4} >
                <PinInput colorScheme='brand' focusBorderColor='brand.500' otp size='md' placeholder='_' >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>
            <Button width="100%" colorScheme='brand' _focus={{boxShadow: 'none'}} variant="solid" >Verify OTP</Button>
          </VStack>
        </GridItem>
    </Grid>
  )
}

export default VerifyOTPPage;