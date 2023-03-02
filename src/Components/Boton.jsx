import styles from "./Boton.module.css"
import { useState } from "react";

function Boton(props) {

let [Contador, setContador] = useState(0)
function manexadorBoton () {
setContador(Contador+1)
props.YDespuesDeContar()
console.log(Contador)
}

  return (
    <button className={styles.boton} onClick={manexadorBoton}> {props.NombreBoton} {props.Contador && <span className={styles.innerCounter}>{Contador}</span>}</button>
  );
}

export default Boton;
