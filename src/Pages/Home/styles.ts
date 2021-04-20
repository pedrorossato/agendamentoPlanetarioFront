import { Button, Container, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import FotoPlanetario from "../../Assets/FundoPlanetarioOpaco.png";
import { Colors } from '../../Styles/colors';

export const Title = styled.h2`
  color:${Colors.primary};
  text-align:center;
  border-bottom: 2px solid ${Colors.secondary};
`;
export const CardContainer = withStyles({
  root:{
    // margin:'30px',
    backgroundColor: 'rgba(255,255,255,0.8)' ,
    // borderRadius:'20px',
    padding:'1rem',
    textAlign:'center'
  }
})(Container);
export const StyledButton = withStyles({
  root:{
    color:`white`,
    backgroundColor:`${Colors.secondary}`,
    fontSize:'16px',
    '&:hover': {
      backgroundColor: `${Colors.primary}`,
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
