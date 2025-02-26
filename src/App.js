import logo from './logo.svg';
import './App.css';

// Import de componentes criados
import HelloWorld from "./components/HelloWorld";
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

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
    </div>
  );

}

export default App;
