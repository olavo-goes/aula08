import { useEffect, useState } from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {Button} from "@mui/material"
import { Link } from 'react-router-dom'



export default function Home() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/usuarios");
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch {
        alert('Ocorreu um erro no app!');
      }
    }
    buscarUsuario();
  }, [usuarios])


      const remover = async(id) => {
          try{
              await fetch('http://localhost:3000/usuarios/' + id, {
                method: 'DELETE'
              });
          }
          catch{
            alert("erro")
          }
      }


      const exportarPDF = () => {
          const doc = new jsPDF();

          const tabela = usuarios.map(usuario => [
            usuario.id,
            usuario.nome,
            usuario.email
          ]);
           doc.text("Lista de Usuários", 10, 10);
           doc.autoTable({
          head:[["id","nome","Email"]],
            body: tabela
           })
           doc.save("Arquivo baixado");
      }
 

  return (
    <>


    <div>    
    <Button variant="contained" onClick={() => exportarPDF()}>export</Button>
    
    <table>
      <tr>
        <td>Nome</td>
        <td>E-mail</td>
        <td>id</td>
      </tr>
      {usuarios.map((usuario) =>
        <tr key={usuario.id}>
          <td>{usuario.nome}</td>
          <td>{usuario.email}</td>
          <td><button onClick={() => remover(usuario.id)}>remover</button>
          <Link to={'/Alterar/' + usuario.id}> 
            <button>alterar</button>
          </Link>
          </td> 
        </tr>
      )}
    </table>
    </div>
    </>
  );
}