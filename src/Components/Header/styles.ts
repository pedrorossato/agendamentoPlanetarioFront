import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from "../../Styles/colors";

export const Nav = styled.nav`
  background: ${Colors.primary.blue};
  height:100px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1.2rem;
  border-bottom:10px solid ${Colors.primary.orange};
  @media screen and (max-width:960px){
    position: relative;
  }
`;

export const Logo = styled.img`
    height:100%;
    justify-self:start;
    cursor:pointer;
    @media screen and (max-width:960px){
        position:absolute;
        top:0;
        left:10px;
    }
`;

export const MenuIcon = styled.div`
    display:none;
    @media screen and (max-width:960px) {
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%,100%);
        font-size:1.8rem;
        cursor:pointer
    }
`;

export const Ul = styled.ul`
    display: grid;
    grid-template-columns:repeat(5,auto);
    grid-gap:10px;
    list-style:none;
    text-align:center;
    width:50vw;
    justify-content:end;
    margin-right:2rem;
    
    @media screen and (max-width:960px) {
        display:flex;
        flex-direction:column;
        width:100%;
        position:absolute;
        top:100%;
        left:-100%;
        opacity:1;
        transition:all 0.5s ease;
        ${props=>{
        if(props.className === 'active'){
            return `
                z-index:1;
                left:0;
                opacity:1;
                transition: all 0.5s ease;
                background-color: ${Colors.primary.blue}
            `;
        }
    }}
    }
`;

export const Li = styled.li`
    text-decoration:none;
    @media screen and (max-width:960px) {
        width:100%;
        display:table;
        padding:0.5rem 1rem;
        text-align:center;
    }
`;

export const StyledLink = styled(Link)`
    &:hover {
        background-color: ${Colors.primary.orange}
    }
    text-decoration:none;
    color: #FFFFFF;
    border-radius:4px;
    transition:all 0.4s ease-out;
    padding:0.5rem 1rem;
    @media screen and (max-width:960px) {
        width:100%;
        display:table;
        padding:0.5rem;
        text-align:center;
    }
    ${props=>{
        if(props['aria-checked']){
            return `
            background-color: ${Colors.primary.orange}
            `;
        }
    }}
`;
