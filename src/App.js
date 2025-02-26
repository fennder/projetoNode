import logo from './logo.svg';
import './App.css';

// Import de componentes criados
import HelloWorld from "./components/HelloWorld";
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  return(
    <div className='App'>
      <HelloWorld />
      <SayMyName nome="Edir Pereira" />
      <SayMyName nome="Pedro Guimarães" />
      <SayMyName nome="FRancisco Chagas" />
      <Pessoa
        nome="Rodrigo"
        idade="25"
        profissao="Programador"
        foto="http://abrindoportas.tec.br/assets/perfil.png"
      />
      <List />
    </div>
  );

}

export default App;
