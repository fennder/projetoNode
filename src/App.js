//import logo from './logo.svg';
import './App.css';

// Import de componentes criados
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Frase from './components/Frase';

function App() {
const nome = 'Maria'

  return(
    <div className='App'>
      <Frase />
      <HelloWorld />
      <SayMyName nome="Edir Pereira" />
      <SayMyName nome="Pedro Guimarães" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Rodrigo"
        idade="25"
        profissao="Programador"
        foto="https://t.ctcdn.com.br/Beji0-8ndvlgjiRZ2zNTbcKsRKs=/768x432/smart/i733836.jpeg"
      />
      <List />
    </div>
  );

}

export default App;
