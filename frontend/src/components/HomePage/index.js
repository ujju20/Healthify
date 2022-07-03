import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import homeImage from '../../images/HomePage.jpg';
import {Container,
InnerContainer,
InnerContentContainer,
Title,
SubHeadingContainer,
SubHeading1,
SubHeading2,
ButtonContainer,
ButtonHospital,
ButtonPatient} from './style.js';
const HomePage = () => {
  return (
    <Container id="contact">
    <InnerContainer>
      <Image 
      src={homeImage} 
      alt="HomeImage"
      width={600}
      height={400}/>
      <InnerContentContainer>
          <SubHeadingContainer>
          <Title>
          Healthify
          </Title>
          <SubHeading1>
          Your Online Hospital at Home.
          </SubHeading1>
        </SubHeadingContainer>
        <SubHeadingContainer>
          <SubHeading2>
            Our aim is to collaborate with<br /> hospitals so that they can give their <br /> services to the patients <br /> online like health records,test <br /> reports etc.
          </SubHeading2>
        </SubHeadingContainer>
        <ButtonContainer>
        <ButtonHospital type="button">Hospital</ButtonHospital>
        <ButtonPatient type="button">Patient</ButtonPatient>
        </ButtonContainer>
      </InnerContentContainer>
    </InnerContainer>
  </Container>
  )
}

export default HomePage