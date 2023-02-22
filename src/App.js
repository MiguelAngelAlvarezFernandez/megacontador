import { useState } from "react";

function App() {

  let [valorActual, setvalorActual]= useState (0)

  function manexadorClickAumenta () {
    let novoValor = valorActual+1
    setvalorActual(novoValor)
  }

  function manexadorClickDisminuye () {
    let novoValor = valorActual-1
    setvalorActual(novoValor)
  }

  function manexadorClickReset () {
    let novoValor = 0
    setvalorActual(novoValor)
  }

  return (
    <div>
      <h1>{valorActual}</h1>
      <button onClick={manexadorClickAumenta}>Aumentador</button>
      <button onClick={manexadorClickDisminuye}>Disminuidor</button>
      <button onClick={manexadorClickReset}>Reset</button>
    </div>
  );
}

export default App;
