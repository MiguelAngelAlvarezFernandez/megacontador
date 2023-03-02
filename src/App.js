import './App.css';
import styles from "./App.module.css"
import { useEffect, useState } from "react";
import Boton from "./Components/Boton/Boton";

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
    <main>
    <h1 className={styles.megacontador}>MEGACONTADOR</h1>
    <div className={styles.contador}>
      <p className={valorActual<0 ? "rojo" : "verde"}> {valorActual}</p>
      <span className={styles.botonMas}><Boton  NombreBoton="+" YDespuesDeContar={Aumentar} Contador/></span>
      <span className={styles.botonMenos}><Boton NombreBoton="-" YDespuesDeContar={Disminuir} Contador/></span>
      <span className={styles.botonReset}><Boton NombreBoton="Reset" YDespuesDeContar={Resetear}/></span>
      {Cronometro===false && <span className={styles.botonCronometro}><Boton NombreBoton="Cronometro ON" YDespuesDeContar={ActivarCronometro}/></span>}
      {Cronometro===true && <span className={styles.botonCronometro}><Boton NombreBoton="Cronometro OFF" YDespuesDeContar={ActivarCronometro}/></span>}
    </div>
    </main>
  );
}

export default App;
