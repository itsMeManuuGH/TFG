import logo from './logo.svg';
import './App.css';
import MiComponente from './Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          Este es el TFG de Manuel Martinez
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MiComponente/>
      </header>
    </div>
  );
}

export default App;
