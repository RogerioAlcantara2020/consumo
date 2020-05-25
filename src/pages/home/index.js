import React, {useState} from 'react';
import axios from 'axios';

import * as S from './styled';
import {useHistory} from 'react-router-dom';

export default function Home(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);
 
    function handlePesquisa(){
      axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
        const repositories = response.data;
        const repositoriesName =[];
        repositories.map((repository)=>{
          repositoriesName.push(repository.full_name);        
        });

       localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
      
      setErro(false);
      history.push('/repositories');      
    })
    .catch(err=>{
      setErro(true);
    });

  }
  return(
  
  <S.Container> 
  <S.Input  className="usuarioInput" value={usuario} onChange={e=>setUsuario(e.target.value)} placeholder="Usuário" />
  <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
  { erro ? <S.erroMessage>Ocorreu um erro! Tente novamente.</S.erroMessage>: ''}
  </S.Container>
  );
}

