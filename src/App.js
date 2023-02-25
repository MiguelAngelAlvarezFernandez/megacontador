import './App.css';
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
                               si empieza siendo false pasa a true al
                               pulsar y viceversa lo que permite tener
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
      <h1 className={valorActual<0 ? "rojo" : "verde"}>{valorActual}</h1>
      <Boton NombreBoton="+" YDespuesDeContar={Aumentar} Contador/>
      <Boton NombreBoton="-" YDespuesDeContar={Disminuir} Contador/>
      <Boton NombreBoton="Reset" YDespuesDeContar={Resetear}/>
      <Boton NombreBoton="Cronometro" YDespuesDeContar={ActivarCronometro}/>
    </div>
  );
}

export default App;
