import React, { useState } from 'react';
import { Logo, MenuIcon, Li, Nav, Ul, StyledLink } from './styles';
import LogoBranco from '../../Assets/Images/LogoPlanetarioUFSMBranco.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export interface IHeaderProps {
  active?: string;
}
const Header: React.FC<IHeaderProps> = ({ active }) => {
  const [clicked, setClicked] = useState(false);
  const handleClickMenuIcon = () => {
    setClicked(!clicked);
  };
  return (
    <Nav>
      <Link style={{ height: '100%' }} to="/">
        <Logo src={LogoBranco}></Logo>
      </Link>
      <MenuIcon onClick={handleClickMenuIcon}>
        {clicked ? (
          <FaTimes style={{ color: 'white' }} />
        ) : (
          <FaBars style={{ color: 'white' }} />
        )}
      </MenuIcon>
      <Ul className={clicked ? 'active' : ''}>
        {/* <Li>
          <StyledLink aria-checked={active === 'Agendamento'} to="/Agendamento">
            Agendamento
          </StyledLink>
        </Li> */}
        <Li>
          <StyledLink aria-checked={active === 'Ajuda'} to="/Ajuda">
            Ajuda
          </StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Header;
