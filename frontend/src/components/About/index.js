import React from 'react'
import Image from 'next/image';
import { Container,
InnerContainer,
InnerContentContainer,
AboutContainer,
AboutContent,
Title,
LowerContanier,
FeatureList,
FeatureItem,
} from './style';
import AboutImage from '../../images/AboutImage.jpg';
const About = () => {
  return (
    <Container>
      <InnerContainer>
        <InnerContentContainer>
        <AboutContainer>
        <Title>What Healthify do?</Title>
        <AboutContent>
        Healthify basically connects patients
        to
        the hospital online.It collaborates with 
        different hospitals who want to provide 
        their services to people online.
        </AboutContent>
        </AboutContainer>
        <AboutContainer>
        <LowerContanier>
          <Title>Key Features</Title>
        </LowerContanier>
        <FeatureList>
        <FeatureItem>Maintaineance of Health Records are easy.</FeatureItem>
        <FeatureItem>Hospitals and Patients can easily Sign in/Sign up.</FeatureItem>
        <FeatureItem>Hospitals can interact with patients online.</FeatureItem>
        </FeatureList>
        </AboutContainer>
        </InnerContentContainer>
        <Image 
        src={AboutImage}
        alt="AboutImage"
        width={1200}
        height={400}/>
      </InnerContainer>
    </Container>
  )
}

export default About