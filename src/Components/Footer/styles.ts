import styled from 'styled-components';
import { Colors } from '../../Styles/colors';
import { Grid } from '@material-ui/core';

export const StyledGrid = styled(Grid)`
  border-top:10px solid ${Colors.secondary};
  color:white;
  background-color: ${Colors.primary}
`;
export const StyledAnchor = styled.a`
  text-align: inherit;
  color:inherit;
  cursor:pointer;
  font-size:1.8rem;
  transition:all 0.5s ease;
  &:hover {
    color: ${Colors.secondary}
  }
`;