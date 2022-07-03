import styled from 'styled-components';

export const Nav = styled.nav`
background-color: #52ab98;
position:relative;
top:0;
left:0;
right:0;
height: 100px;
z-index:60;
`

export const NavContainer=styled.div`
display: flex;
justify-content: space-between;
`

export const NavLogo=styled.div`
display: flex;
justify-content:flex-end;
flex-direction: row;
`

export const NavTitle=styled.div`
margin-top: 29px;
font-size: 30px;
color:#2b6777;
`

export const Navbar=styled.ul`
display:flex;
justify-content: flex-end;
list-style-type:none;
align-items: center;
`

export const NavbarItem=styled.li`
padding:24px;
font-size:20px;
text-align: center;
`

export const NavLink=styled.a`
color: black;
text-decoration: none;
`