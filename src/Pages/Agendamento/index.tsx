import React from 'react';
import Footer from '../../Components/Footer';
import FormAgendamento from '../../Components/FormAgendamento';
import Header from '../../Components/Header'

// import { Container } from './styles';

const Agendamento: React.FC = () => {
  return (
    <>
      <Header/>
        <FormAgendamento/>
      <Footer/>
    </>
  );
};

export default Agendamento;
