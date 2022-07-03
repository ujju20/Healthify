import React from 'react'
import { useState } from 'react'
import Spinner from '../Spinner/'
import Image from 'next/image';
import contactus from '../../images/ContactImage.jpg';
import {Container,
InnerContainer,
InnerContentContainer,
Title,
SubHeading,
FormPage,
FormInputContainer,
FormLabel,
FormInput,
FormTextArea,
FormSubmit,
ErrorMessge} from './style.js';
const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [mobile,setMobile]=useState('');
  const [subject,setSubject]=useState('');
  const [query,setQuery]=useState('');
  const [loading,setLoading]=useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')
    if(name === '' || email === '' || mobile ==='' || subject === '' || query === '')
    {
      setLoading(false);
      setErrorMessage("Fill all fields");
      return;
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setErrorMessage('Please give valid email')
      setLoading(false)
      return
    }
    setErrorMessage('')
  }
  return (
    <Container id="contact">
      <InnerContainer>
        <Image 
        src={contactus} 
        alt="contactImage"
        width={600}
        height={400}/>
        <InnerContentContainer>
          <Title>
          Reach Us!!
          </Title>
          <SubHeading>
          If any Queries, fill the below form
          </SubHeading>
          <FormPage onSubmit={handleSubmit}>
            <FormInputContainer>
              <FormLabel>Name</FormLabel>
              <FormInput
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange = {(e) => (setName(e.target.value))}
              ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
            <FormLabel>E-mail</FormLabel>
            <FormInput
            type="email"
            placeholder="Enter E-mail"
            value={email}
            onChange = {(e) => (setEmail(e.target.value))}
            ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
            <FormLabel>Mobile No.</FormLabel>
            <FormInput
             type="text"
              placeholder="Enter Mobile No."
              value={mobile}
              onChange = {(e) => (setMobile(e.target.value))}></FormInput>
            </FormInputContainer>
            <FormInputContainer>
            <FormLabel>Subject</FormLabel>
            <FormInput
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange = {(e) => (setSubject(e.target.value))}
            ></FormInput>
            </FormInputContainer>
            <FormInputContainer>
            <FormLabel>Query</FormLabel>
            <FormTextArea
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
            ></FormTextArea>
            </FormInputContainer>
            {errorMessage && <ErrorMessge>{errorMessage}</ErrorMessge>}
            <FormSubmit type="submit" errorMessage={errorMessage}>
            {loading ? <Spinner width={18} height={18} /> : 'Send Message'}</FormSubmit>
          </FormPage>
        </InnerContentContainer>
      </InnerContainer>
    </Container>
  )
}

export default Contact