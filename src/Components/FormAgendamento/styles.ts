import { Button, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from '../../Styles/colors';

// export const StyledButton = styled(Button)`
//   width:'50%';
//   align-self:'center';
//   color:${Colors.primary};
//   background-color:${Colors.secondary};
// `;
export const StyledButton = withStyles({
  root:{
    width:'50%',
    alignSelf:'center',
    color:`white`,
    backgroundColor:`${Colors.primary.orange}`,
    fontSize:'16px',
    '&:hover': {
      backgroundColor: `${Colors.primary.blue}`,
    },
  },
})(Button);

export const Form = styled.form`
  padding:20px;
  display:flex;
  flex-direction:column;
  margin:auto;
`;

export const FormItem = styled.div`
  padding-bottom:20px;
  width:100%
`;

