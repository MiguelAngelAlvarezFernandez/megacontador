import { useState } from "react";
import Boton from "./Components/Boton";

function App() {

  let [valorActual, setvalorActual]= useState (0)

  function Aumentar () {
    let novoValor = valorActual+1
    setvalorActual(novoValor)
  }

  function Disminuir () {
    let novoValor = valorActual-1
    setvalorActual(novoValor)
  }

  return (
    <div>
      <h1>{valorActual}</h1>
      <Boton Nombre="+" YDespuesDeContarQue={Aumentar}/>
      <Boton Nombre="-" YDespuesDeContarQue={Disminuir}/>
    </div>
  );
}

export default App;
