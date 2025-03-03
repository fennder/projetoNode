//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import Condicional from './components/Condicional';

// Import de componentes criados
/*import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Frase from './components/Frase';*/

//import Evento from './components/Evento'
//import Form from './components/Form'

import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

function App() {
  const [nome, setNome] = useState()

  return(
    <div className='App'>
      <h1>State Life</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome} />
    </div>
  );

}

export default App;
