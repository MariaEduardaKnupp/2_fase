import { useState } from "react"

function Altura() {

    const [alto, setAlto] = useState()
    
function pedro(){
let enzo = 140
let valentina = 150
let anos = 0

do{

    enzo +=3
    valentina +=2
    anos +=1
    
    
    alert("esperando")
    
}while(enzo < valentina)

alert(`o enzo vai estar maior maior que valentina em ${anos}`)
setAlto(anos)





}
      return (
    <div>
      <h1>ENZO E VALENTINA</h1>
<button onClick={pedro}>QUANTOS ANOS O ENZO VAI ESTAR MAIOR QUE VALENTINA</button>
anos
{alto}
    </div>
  )
}

export default Altura
