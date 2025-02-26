import logo from './logo.svg';
import './App.css';

// Import de componentes criados
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "Edir Pereira";
  let a = 1;
  let b = 2;
  
  function sum(){
    return a + b;
  }

  const url = "https://upload.wikimedia.org/wikipedia/pt/4/44/GladiadorPoster.jpg";

  return(
    <div className='App'>
      <p>Testando o JSX</p>
      <p>Olá {name}</p>
      <p>Soma é {sum()}</p>
      <img src='{url}' alt='Informação da Imagem'></img>
      <HelloWorld />
    </div>
  );

}

export default App;
