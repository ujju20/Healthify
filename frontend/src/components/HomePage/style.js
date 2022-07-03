import styled from 'styled-components';

export const Container= styled.section`
display: flex;
flex-direction: column;
background-color: #f2f2f2;
margin-top: 20px;
`
export const InnerContainer= styled.div`
display: flex;
justify-content: space-around;

`
export const InnerContentContainer= styled.div`
margin:20px

`
export const Title=styled.div`
font-size:40px;
`

export const SubHeadingContainer=styled.div`
padding: 20px;
`

export const SubHeading1=styled.div`
font-size:25px;
color:grey
`

export const SubHeading2=styled.div`
font-size:18px;
color:grey;
`

export const ButtonContainer=styled.div`
display: flex;
justify-content: space-around;
align-items: flex-start;
margin-right: 35px;
`

export const ButtonHospital=styled.button`
width:95px;
height: 35px;
color:white;
background-color:#2b6777;
border-radius: 6px;
font-size: 15px;
`

export const ButtonPatient=styled.button`
width:95px;
height: 35px;
color:white;
background-color:#52ab98;
border-radius: 6px;
font-size: 15px;
`