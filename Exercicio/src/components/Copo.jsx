import { useState } from "react"

function Copo() {

        const [resultado, setResultado] = useState()

    function analise(){
        let numb = Number(prompt("Digite um número para a análise"))
        if(numb >0){
            alert("Positivo")
        }
        else if(numb <0){
            alert("Negativo")
        }
        else{
            alert("Nulo")
        }
        setResultado(numb)
    }
  return (
    <div>
      <button onClick={analise}>Número</button>

      <div>
        Seu número é: {resultado}
      </div>
    </div>
  )
}

export default Copo
