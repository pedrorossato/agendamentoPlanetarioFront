import styled from 'styled-components';
import { Colors } from '../../Styles/colors';
import { Grid } from '@material-ui/core';

export const StyledGrid = styled(Grid)`
  border-top:10px solid ${Colors.primary.orange};
  color:white;
  background-color: ${Colors.primary.blue}
`;
export const StyledAnchor = styled.a`
  text-align: inherit;
  color:inherit;
  cursor:pointer;
  font-size:1.8rem;
  transition:all 0.5s ease;
  &:hover {
    color: ${Colors.primary.orange}
  }
`;