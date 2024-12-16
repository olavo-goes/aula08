import { useState } from "react";
import  {useNavigate}  from "react-router-dom";


export default function Registrar() {


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigate();

  const registrar = async (event) => {
  event.preventDefault();
  try{
    const resposta = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          nome: nome,
          email: email
        })
    })
    if(resposta.ok){
        navigation('/')
    }
  }
  catch(err){
    alert('nada', err)
  }}


  return (

    <main>
      <form onSubmit={registrar}>
        <input
          type="text"
          value={nome}
          placeholder="Nome"
          onChange={(event) => setNome(event.target.value)}
        />


        <input 
        type="email"
        value={email}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">Salvar</button>
        </form>
    </main>
  );
}


