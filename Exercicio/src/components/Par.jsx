import { useState } from "react"

function Par() {

    const [resultado, setResultado] = useState()

function ParP() {
    let numero = Number(prompt("Digite um número número"))
    if(numero %2 === 0){
        alert(`${numero} PAR`)
        if(numero >0){
            alert("Positivo")
        }
        else if(numero <0){
            alert("Negativo")
        }
        else{
            alert("Nulo")
        }
    }else{
        alert(`${numero} IMPAR`)
        if(numero >0){
            alert("Positivo")
        }
        else if(numero <0){
            alert("Negativo")
        }
        else{
            alert("Nulo")
        }
}


    setResultado(numero)
}   

  return (
    <div>
      <button onClick={ParP}>Conferir</button>
    <div>
      Seu número é: {resultado}
    </div>

    </div>
  )
}

export default Par
