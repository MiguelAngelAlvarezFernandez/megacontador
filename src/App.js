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

  let [ContadorMas, setContadorMas] = useState(0)
  function manexadorClickContadorMas () {
    setContadorMas(ContadorMas+1)
    manexadorClickAumenta()
  }

  let [ContadorMenos, setContadorMenos] = useState(0)
  function manexadorClickContadorMenos () {
    setContadorMenos(ContadorMenos+1)
    manexadorClickDisminuye()
  }


  return (
    <div>
      <h1>{valorActual}</h1>
      <button onClick={manexadorClickContadorMas}>Aumentador ({ContadorMas})</button>
      <button onClick={manexadorClickContadorMenos}>Disminuidor ({ContadorMenos})</button>
    </div>
  );
}

export default App;
