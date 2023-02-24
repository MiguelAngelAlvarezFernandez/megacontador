import { useState } from "react";

function Boton(props) {

let [Contador, setContador] = useState(0)
function manexadorBoton () {
setContador(Contador+1)
props.YDespuesDeContarQue()
console.log(Contador)
}

  return (
    <button onClick={manexadorBoton}> {props.NombreBoton} {props.Contador && <span>({Contador})</span>}</button>
  );
}

export default Boton;
