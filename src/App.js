//import logo from './logo.svg';
import './App.css';

// Import de componentes criados
/*import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Frase from './components/Frase';*/

import Evento from './components/Evento'
import Form from './components/Form'

function App() {
//const nome = 'Maria'

  return(
    <div className='App'>
      <h1>Testando eventos</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <div>
        <Form />
      </div>
    </div>
  );

}

export default App;
