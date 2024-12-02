import { useState } from "react";
import  {useNavigate}  from "react-router-dom";

export default function Registrar() {


  const [nome, setNome] = useState('');
  const [Email, setEmail] = useState('');
  const navigate = useNavigate();

  const registrar = async (event) => {
  event.preventDefault();
  try{
    const resposta = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {'Content-Type': 'application.json'},
        dody: JSON.stringify({
          nome: 'nome',
          email: 'email'
        })
    })
    if(resposta.ok){
        navigate('/')
    }
  }
  catch{
    alert('ocorreu um erro')
  } registrar(), []}


  return (

    <main>
      <form onSubmit={registrar}>
        <input
          type="Text"
          value={nome}
          placeholder="Nome"
          onChange={(event) => setNome(event.target.value)}
        />


        <input 
        type="Email"
        value={Email}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
        />


        <button onSubmit={registrar}>Salvar</button>
        </form>
    </main>
  );
}


