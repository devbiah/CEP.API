import React from 'react';
import BuscaCEP from './components/BuscaCEP';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Busca de Endereço por CEP</h1>
        <BuscaCEP />
      </header>
    </div>
  );
}

export default App;
