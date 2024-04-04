import './App.css';
import CEP from './buscaCEP';
import ControleVeiculos from './garagem';
import Palindromos from './palindromo';
import Troco from './troco';

function App() {
  return (
    <div className="App">
      <div className="section">
        <Palindromos />
      </div>
      <div className="section">
        <Troco />
      </div>
      <div className="section">
        <ControleVeiculos />
      </div>
      <div className="section">
        <CEP />
      </div>
    </div>
  );
}

export default App;
