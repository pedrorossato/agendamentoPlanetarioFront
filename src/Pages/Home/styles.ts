import { Button, Container, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import FotoPlanetario from "../../Assets/Images/FundoPlanetarioOpaco.png";
import { Colors } from '../../Styles/colors';

export const Title = styled.h2`
  color:${Colors.primary.blue};
  text-align:center;
  font-size:50px;
  border-bottom: 2px solid ${Colors.primary.orange};
`;
export const CardContainer = withStyles({
  root:{
    // margin:'30px',
    backgroundColor: 'rgba(255,255,255,0.8)' ,
    // borderRadius:'20px',
    padding:'2rem',
    textAlign:'left'
  }
})(Container);
export const StyledButton = withStyles({
  root:{
    color:`white`,
    backgroundColor:`${Colors.primary.orange}`,
    fontSize:'18px',
    '&:hover': {
      backgroundColor: `${Colors.primary.blue}`,
    },
  },
})(Button);
export const BackgroundDiv = styled.div`
  background-image: url(${FotoPlanetario});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  /* opacity:.5; */
  height:100%
`;

export const SessionTitle = styled.li`
  font-weight: bold;
  font-size: 23px;
`;
