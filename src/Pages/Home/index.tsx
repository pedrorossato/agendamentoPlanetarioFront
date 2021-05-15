import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { CardContainer, SessionTitle, StyledButton, Title } from './styles';
// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header active="Home" />
      <CardContainer fixed >
        <Title>Agendamento de Sessões Virtuais</Title>
        <br/>
        <h3><b>O QUE CADA SESSÃO ABORDA?</b></h3>
        <p style={{fontSize:'18px'}}>Leia e encontre a sessão que inclua os tópicos que você mais deseja que sejam abordados. 
          No momento do agendamento você deverá informar a sessão desejada.</p>
        <br/>
        <ul>
        <SessionTitle>Sessão 01.  Stellarium – Simulação do Céu em Tempo Real</SessionTitle>
        <p>Tópicos abordados: Reconhecimento do Céu; Pontos Cardeais; Efeito da Atmosfera; Constelações; Planetas Visíveis; Lua.</p>
        <br/>
        <SessionTitle>Sessão 02.  Do Big Bang ao Sistema Solar</SessionTitle>
        <p>Tópicos abordados: Big Bang; Galáxias; Estrelas; Sol; Planetas (detalhadamente); Asteroides; Meteoros; Tamanho do Sistema Solar.</p>
        <br/>
        <SessionTitle>Sessão 03.  História da Astronomia e Instrumentos Observacionais</SessionTitle>
        <p>Tópicos abordados: Telescópios (tipos e funcionamento); Ano-Luz; Geocentrismo; Heliocentrismo.</p>
        <br/>
        <SessionTitle>Sessão 04.  Do Ponto de Vista da Terra</SessionTitle>
        <p>Tópicos abordados: Rotação; Translação; Equinócios; Eclipses; Fases da Lua; Estações do Ano.</p>
        <br/>
        <SessionTitle>Sessão 05.  Astronomia Moderna</SessionTitle>
        <p>Tópicos abordados: Big Bang; Galáxias; Ciclo de Vida Estelar (Nebulosas, Supernovas, Buracos Negros); Fusão Nuclear; Elementos Químicos.</p>
        <br/>
        <SessionTitle>Sessão 06. Exploração Espacial </SessionTitle>
        <p>Tópicos abordados: Missões Apollo; Corrida Espacial; Satélites; Foguetes; Estações Espaciais; Space Shuttle.</p>
        <br/>
        </ul>
        <Link style={{textDecoration:'none'}} to='/Agendamento'>
          <StyledButton>
            Clique aqui para agendar
          </StyledButton>
        </Link>
      </CardContainer>
      <Footer />
    </>
  );
};

export default Home;
