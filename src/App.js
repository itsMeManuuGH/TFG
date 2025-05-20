import logo from './Cerebro sin fondo MyFocus.png';
import './App.css';
import MiComponente from './Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className='miLogo' >MyFocus</h1>
       <a className='miTexto'>
          Focus on Achievement
          
        </a>
        

        <p> </p>

        <MiComponente/>
      </header>
    </div>
  );
}

export default App;
