import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import { CardContainer, StyledButton, Title } from './styles';
// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header active="Home" />
      {/* <BackgroundDiv> */}
        <CardContainer fixed >
          <Title>Agendamento de sessões virtuais</Title>
          <br/>
          <h3><b>O QUE CADA SESSÃO ABORDA?</b></h3>
          <br/>
          <p>Sessão 01.  Stellarium – Simulação do Céu em Tempo Real</p>
          <p>Tópicos abordados: Reconhecimento do Céu; Pontos Cardeais; Efeito da Atmosfera; Constelações; Planetas Visíveis; Lua.</p>
          <br/>
          <p>Sessão 02.  Do Big Bang ao Sistema Solar</p>
          <p>Tópicos abordados: Big Bang; Galáxias; Estrelas; Sol; Planetas (detalhadamente); Asteroides; Meteoros; Tamanho do Sistema Solar.</p>
          <br/>
          <p>Sessão 03.  História da Astronomia e Instrumentos Observacionais</p>
          <p>Tópicos abordados: Telescópios (tipos e funcionamento); Ano-Luz; Geocentrismo; Heliocentrismo.</p>
          <br/>
          <p>Sessão 04.  Do Ponto de Vista da Terra</p>
          <p>Tópicos abordados: Rotação; Translação; Equinócios; Eclipses; Fases da Lua; Estações do Ano.</p>
          <br/>
          <p>Sessão 05.  Astronomia Moderna</p>
          <p>Tópicos abordados: Big Bang; Galáxias; Ciclo de Vida Estelar (Nebulosas, Supernovas, Buracos Negros); Fusão Nuclear; Elementos Químicos.</p>
          <br/>
          <p>Sessão 06. Exploração Espacial </p>
          <p>Tópicos abordados: Missões Apollo; Corrida Espacial; Satélites; Foguetes; Estações Espaciais; Space Shuttle.</p>
          <br/>

          <Link style={{textDecoration:'none'}} to='/Agendamento'>
            <StyledButton>
              Agendar
            </StyledButton>
          </Link>
        </CardContainer>
      {/* </BackgroundDiv> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
