import { useState } from "react";

function Boton(props) {

let [Contador, setContador] = useState(0)
function manexadorBoton () {
setContador(Contador+1)
props.YDespuesDeContarQue()
}

  return (
    <button onClick={manexadorBoton}> {props.NombreBoton} ({Contador})</button>
  );
}

export default Boton;
