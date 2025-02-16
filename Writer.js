import React, { useState } from "react";
import useNFCWriter from "./src/hooks/useNFCWriter";

const Writer = () => {
  const [textToWrite, setTextToWrite] = useState("");
  const [itWorks, setItWorks] = useState("");
  const writeToNfc = useNFCWriter();

  const handleWrite = () => {
    // Ejecutamos el hook para escribir el texto en la tarjeta
    writeToNfc(textToWrite, setItWorks);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Escribir en Tarjeta NFC</h1>
      <input
        type="text"
        placeholder="Escribe el texto a guardar"
        value={textToWrite}
        onChange={(e) => setTextToWrite(e.target.value)}
        style={{ padding: "0.5rem", fontSize: "1rem", width: "80%" }}
      />
      <br /><br />
      <button
        onClick={handleWrite}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer"
        }}
      >
        Confirmar Guardado
      </button>
      <br /><br />
      {itWorks && <p>Resultado: {itWorks}</p>}
    </div>
  );
};

export default Writer;
