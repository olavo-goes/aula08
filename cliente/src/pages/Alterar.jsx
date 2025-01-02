import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

export default function Alterar() {

        const {id} = useParams();
        const [usuario, setUsuario] = useState({nome:'', email:''})
        const [nome, setNome] = useState('')
        const [email, setEmail] = useState('')


        useEffect(() => {
            const buscarUsuario = async () => {
              try {
                const resposta = await fetch(`http://localhost:3000/usuarios/${id}`);
                const dados = await resposta.json();
                setUsuario(dados);
                setNome(dados.nome);
                setEmail(dados.email);
              } catch {
                alert('Ocorreu um erro no app!');
              }
            }
            buscarUsuario();
          }, [id])

          const alterar = async (event) => {
            event.preventDefault();
            try{
              const resposta = await fetch(`http://localhost:3000/usuarios/${id}`,{
                  method: 'PUT',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({
                    nome: nome,
                    email: email
                  })
              })
              if(!resposta.ok){
                  alert("erro alterar")
              }
              const attDados = await resposta.json();
              setUsuario(attDados)
              alert("dados atualizados")
            }
            catch(err){
              alert('ocorreu um erro att.att')
            }}

            return(
                <main>
                <form onSubmit={alterar}>
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
                  <button type="submit">Att dados</button>
                  </form>
              </main>
            );
        }