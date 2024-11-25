import { useState } from "react";

export default function Registrar() {


  const [nome, setNome] = useState('');
  const [Email, setEmail] = useState('');


  event.preventDefault();


  const registrar = async () => {
  try{
    await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {'Content-Type': 'application.json'},
        dody: JSON.stringify({
          nome: 'nome',
          email: 'email'
        })
    })
  }
  catch{
    alert("ocorreu um erro")
  } registrar(), []}


  return (
     <form>
      <form action=""> 

      </form>
     </form>


  );
}