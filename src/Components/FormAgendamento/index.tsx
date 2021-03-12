import React, { useState } from 'react';
import { Form, FormItem, StyledButton } from './styles';
import { Container, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import Swal from "sweetalert2";
// import api from '../../Services/ApiService';
import { Title } from '../../Pages/Home/styles';
import { getDay } from "date-fns";

const FormAgendamento: React.FC = () => {
  const [name,setName] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const [telefone,setTelefone] = useState<string>('');
  const [sessaoEscolhida, setSessaoEscolhida] = useState<string>('');
  const [dataSessao,setDataSessao] = useState<string>('');
  const [horaSessao,setHoraSessao] = useState<string>('');
  const [instituicao, setInstituicao] = useState<string>('');
  const [municipio, setMunicipio] = useState<string>('');
  const [serie,setSerie] = useState<number>();
  const [alunos,setAlunos] = useState<number>();
  const [professor,setProfessor] = useState<string>('');
  const [emailProfessor,setEmailProfessor] = useState<string>('');
  const [tipoEscola,setTipoEscola] = useState<string>('');
  const [telefoneEscola,setTelefoneEscola] = useState<string>('');
  const [telefoneProfessor,setTelefoneProfessor] = useState<string>('');
  const [alunoDeficiente,setAlunoDeficiente] = useState<string>('');
  
  const validateDataSessao = (dataSessao:string,horaSessao:string) => {
    const dateformat = new Date(`${dataSessao}T${horaSessao}`);
    console.log(dateformat,getDay(dateformat));
    return [1,2,3,4,5].includes(getDay(dateformat));
  }
  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    console.log(
      name,
      email,
      telefone,
      sessaoEscolhida,
      dataSessao,
      horaSessao,
      instituicao,
      municipio,
      serie,
      alunos,
      professor,
      emailProfessor,
      tipoEscola,
      telefoneProfessor,
      alunoDeficiente
    );
    if(!validateDataSessao(dataSessao,horaSessao)){
      Swal.fire({
        title:'Erro!',
        text:'A data selecionada não é um dia útil',
        icon: 'error'
      })
    };
  }
  return (
    <Container style={{backgroundColor:'rgba(255,255,255,0.8)'}} maxWidth="sm">
      <Form onSubmit={handleSubmit}>
        <Title>Agendar sessão remota</Title>
        <FormItem>
          <TextField 
            type="text" 
            required 
            label="Nome" 
            value={name || ''}
            onChange={(event)=>setName(event.target.value)}
            placeholder="Insira seu nome"
            style={{width:'100%'}}
          />
        </FormItem>
        <FormItem>
          <TextField 
            type="email" 
            required 
            label="E-mail"
            value={email || ''} 
            onChange={(event)=>setEmail(event.target.value)}
            placeholder="Insira seu melhor e-mail"
            style={{width:'100%'}}
          />
        </FormItem>
        <FormItem>
          <PhoneInput
            specialLabel="Telefone"
            inputStyle={{width:'100%',backgroundColor:'rgba(255,255,255,0.3)'}}
            country={"br"} 
            value={telefone || ''} 
            onChange={(number)=>{setTelefone(number)}}
            regions={[ 'south-america']}
            placeholder="Insira seu telefone"
          />
        </FormItem>
        <FormItem>
          <FormControl style={{width:'100%'}}>
            <InputLabel>Sessão escolhida</InputLabel> 
            <Select
              value={sessaoEscolhida || ''}
              onChange={(event)=>setSessaoEscolhida(event.target.value as string)}
              required
            >
              <MenuItem value="01 - Stellarium – Simulação do Céu em Tempo Real">
                01 - Stellarium – Simulação do Céu em Tempo Real
              </MenuItem>
              <MenuItem value="02 - Do Big Bang ao Sistema Solar">
                02 - Do Big Bang ao Sistema Solar
              </MenuItem>
              <MenuItem value="03 - História da Astronomia e Instrumentos Observacionais">
                03 - História da Astronomia e Instrumentos Observacionais
              </MenuItem>
              <MenuItem value="04 - Do Ponto de Vista da Terra">
                04 - Do Ponto de Vista da Terra
              </MenuItem>
              <MenuItem value="05 - Astronomia Moderna">
                05 - Astronomia Moderna
              </MenuItem>
              <MenuItem value="06 - Exploração Espacial">
                06 - Exploração Espacial
              </MenuItem>

            </Select>
          </FormControl>
        </FormItem>
        <FormItem>
          <TextField
            label="Data da sessão"
            type="date"
            placeholder="Insira a data da sessão"
            InputLabelProps={{
              shrink: true,
            }}
            value={dataSessao || ''}
            onChange={(event)=>setDataSessao(event.target.value)}
            style={{width:'100%'}}
            required
          />
        </FormItem>
        <FormItem>
          <FormControl style={{width:'100%'}}>
            <InputLabel>Horário</InputLabel>
            <Select
              value={horaSessao || ''}
              onChange={(event)=>setHoraSessao(event.target.value as string)}
              required
            >
              <MenuItem value={'10:00'}>10:00</MenuItem>
              <MenuItem value={'15:00'}>15:00</MenuItem>
            </Select>
          </FormControl>
        </FormItem>
        <FormItem>
          <TextField 
            type="number" 
            required 
            label="Ano/Série" 
            value={serie || ''}
            onChange={(event)=>setSerie(parseInt(event.target.value))}
            placeholder="Insira o ano ou série"
            style={{width:'100%'}}
          />
        </FormItem>
        <FormItem>
          <TextField 
            type="number" 
            InputProps={{inputProps:{min:10}}}
            required 
            label="Número de alunos" 
            value={alunos || ''}
            onChange={(event)=>setAlunos(parseInt(event.target.value))}
            placeholder="Insira o número de alunos"
            style={{width:'100%'}}
          />
        </FormItem>
        <FormItem>
          <TextField 
            type="text" 
            required 
            label="Professor responsável" 
            value={professor || ''}
            onChange={(event)=>setProfessor(event.target.value)}
            placeholder="Insira o nome do professor responsável"
            style={{width:'100%'}}
          />
        </FormItem>
        <FormItem>
          <TextField 
            type="text" 
            required 
            label="E-mail do professor" 
            value={emailProfessor || ''}
            onChange={(event)=>setEmailProfessor(event.target.value)}
            placeholder="Insita o e-mail do professor responsável"
            style={{width:'100%'}}
          />
        </FormItem>
        <FormItem>
          <PhoneInput
            specialLabel="Telefone do professor reponsável"
            inputStyle={{width:'100%',backgroundColor:'rgba(255,255,255,0.3)'}}
            country={"br"} 
            value={telefoneProfessor || ''} 
            onChange={(number)=>{setTelefoneProfessor(number)}}
            regions={['south-america']}
            placeholder="Insira o telefone do professor responsável"
          />
        </FormItem>
        <FormItem>
          <TextField 
            type="text" 
            required 
            label="Tipo de escola (Municipal, Estadual, Particular...)" 
            value={tipoEscola || ''}
            onChange={(event)=>setTipoEscola(event.target.value)}
            placeholder="Insira o tipo de escola"
            style={{width:'100%'}}
          />
        </FormItem>
        <FormItem>
          <PhoneInput
            specialLabel="Telefone da escola"
            inputStyle={{width:'100%',backgroundColor:'rgba(255,255,255,0.3)'}}
            country={"br"} 
            value={telefoneEscola || ''} 
            onChange={(number)=>{setTelefoneEscola(number)}}
            regions={['south-america']}
            placeholder="Insira o telefone da escola"
          />
        </FormItem>
        <FormItem>
          <TextField 
            type="text" 
            required 
            label="Nome da instituição" 
            value={instituicao || ''}
            onChange={(event)=>setInstituicao(event.target.value)}
            placeholder="Insira o nome da instituição"
            style={{width:'100%'}}
          />
        </FormItem>
        <FormItem>
          <TextField 
            type="text" 
            required 
            label="Município" 
            value={municipio || ''}
            onChange={(event)=>setMunicipio(event.target.value)}
            placeholder="Insira o nome do município"
            style={{width:'100%'}}
          />
        </FormItem>
        <FormItem>
          <TextField 
            type="text"
            required 
            label="A turma possui algum aluno com deficiência? Se sim, qual(is)?" 
            value={alunoDeficiente || ''}
            onChange={(event)=>setAlunoDeficiente(event.target.value)}
            placeholder="Insira se sim ou não, se sim informe a deficiência."
            style={{width:'100%'}}
          />
        </FormItem>
        <StyledButton 
          variant="contained"
          type="submit">Agendar
        </StyledButton>
      </Form>
    </Container>
  );
}

export default FormAgendamento;