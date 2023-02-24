import { useEffect, useState } from "react";
import Boton from "./Components/Boton";

function App() {

  let [valorActual, setvalorActual]= useState (0)
  let [Cronometro, setCronometro] = useState (false)

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

  function ActivarCronometro () {
    setCronometro(!Cronometro) /*Así niego cronómetro, de forma
                               si empieza siendo true pasa a false
                               y viceversa lo que me permitirá tener
                               en un solo botón el inicio y stop del
                               Cronometro */ 
  }

  useEffect (
  () => { 
    let CodCronometro
    if (Cronometro) {CodCronometro = setTimeout(Aumentar, 1000)}
    return ()=>{clearTimeout(CodCronometro)}
  }, 
  [Cronometro, valorActual] ) 
  


  return (
    <div>
      <h1>{valorActual}</h1>
      <Boton NombreBoton="+" YDespuesDeContarQue={Aumentar} Contador/>
      <Boton NombreBoton="-" YDespuesDeContarQue={Disminuir} Contador/>
      <Boton NombreBoton="Reset" YDespuesDeContarQue={Resetear}/>
      <Boton NombreBoton="Cronometro" YDespuesDeContarQue={ActivarCronometro}/>
    </div>
  );
}

export default App;
