import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Alteração no arquivo<code>src/App.js</code> e salve para atualizar.
        </p>
        <p>
          Segundo texto para visualização.
        </p>
        <a
          className="App-link"
          href="https://abrindoportas.tec.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vá para o Abrindo Portas Tecnologia
        </a>
      </header>
    </div>
  );
}

export default App;
