//import logo from './logo.svg';
import './App.css';
import Condicional from './components/Condicional';

// Import de componentes criados
/*import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Frase from './components/Frase';*/

//import Evento from './components/Evento'
//import Form from './components/Form'

import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return(
    <div className='App'>
      <h1>Renderização de Listas</h1>
      <Condicional />
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  );

}

export default App;
