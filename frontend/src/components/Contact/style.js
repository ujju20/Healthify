import styled from 'styled-components';

export const Container= styled.section`
position: relative;
top:10vh;
left: 0;
right:0;
width: 100%;
padding: 20px 0;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #f8f8fa;
margin:0px;
`
export const InnerContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const InnerContentContainer= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 80px;
padding: 30px;
`
export const Title=styled.div`
font-size:30px;
padding-bottom: 0px;
text-align:left;
font-weight: bolder;
`

export const SubHeading=styled.div`
font-size: 20px;
`

export const FormPage=styled.form`
width:100%;
`

export const FormInputContainer=styled.div`
width:100%;
`

export const FormLabel=styled.h2`
color: #2b6777;
`

export const FormInput=styled.input`
width: 100%;
height:30px;
border:none;
border-bottom: 5px solid #2b6777;
outline: none;
font-size: 15px;
padding: 5px;
`

export const FormTextArea=styled.textarea`
width: 100%;
height:50px;
border:none;
border: 5px solid #2b6777;
font-size: 15px;
padding: 5px;
border-radius: 8px;
`

export const FormSubmit=styled.button`
width: 100%;
height: 35px;
background-color: #c8d8e4;
font-size: 18px;
border-radius: 6px;
margin-top: 20px;
`

export const ErrorMessge=styled.div`
color:red;
font-style: italic;
`
