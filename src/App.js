import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useNFCReader from "./hooks/useNFCReader";

function App() {
  const [cardId, setCardId] = useState("");
  useNFCReader(setCardId); // Iniciamos la lectura NFC

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Escaneo de Tarjetas NFC</h1>
        <p>{cardId ? `Tarjeta detectada: ${cardId}` : "Acerque una tarjeta NFC..."}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
