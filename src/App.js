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

  function Resetear () {
    let novoValor = 0
    setvalorActual(novoValor)
  }

  return (
    <div>
      <h1>{valorActual}</h1>
      <Boton NombreBoton="+" YDespuesDeContarQue={Aumentar} Contador/>
      <Boton NombreBoton="-" YDespuesDeContarQue={Disminuir} Contador/>
      <Boton NombreBoton="Reset" YDespuesDeContarQue={Resetear}/>
    </div>
  );
}

export default App;
