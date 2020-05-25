import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
width:100%;
max-width: 9991px;
margin: 0 auto;
`

export const Title = styled.h1`
text-align: center;
font-size: 2rem;
font-family: sans-serfif;
color:#333;
`

export const List = styled.ul`
list-style:none;
padding: 0;
margin: 0;
font-family: sans-serif;
`
export const ListItem = styled.li`
margin: 2rem 0;
background: #000;
color: #FFF;
padding: .5rem;
`

export const LinkHome = styled(Link)`
display:block;
width:4rem;
text-align: center;
margin :2rem auto;
padding .5rem 0;
background-color: #000;
color :#fff;
text-decoration: none;
`