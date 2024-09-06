import { useState } from "react"

function UberStar() {

    function uber(){

    let distancia = Number(prompt("Qual distancia você vai percorrer:"))
    let velocidade = 300000 
    let calculo,calculo1
    calculo = distancia / velocidade 

    if(calculo > 31104000){
        calculo1 = (((((calculo / 60)/ 60)/24)/30)/12)
        alert(`a viagem vai demorar ${calculo1.toFixed(2)}ano`)
    }
    else if(calculo > 2592000){
        calculo1 = ((((calculo / 60)/ 60)/24)/30)
        alert(`a viagem vai demorar ${calculo1.toFixed(2)}mês`)
    }
    else if(calculo > 86400){
        calculo1 = (((calculo / 60)/ 60)/24)
        alert(`a viagem vai demorar ${calculo1.toFixed(2)}dia`)
     }
     else if(calculo > 3600){
         calculo1 = ((calculo / 60)/ 60)
         alert(`a viagem vai demorar ${calculo1.toFixed(2)}hora`)
      }
     else if(calculo > 60){
         calculo1 = (calculo / 60)
         alert(`a viagem vai demorar ${calculo1.toFixed(2)}minutos`)
      }
     else if(calculo > 0){
         alert(`a viagem vai demorar ${calculo1.toFixed(2)}segundos`)
     }

    }

  return (
    <div className="uber">
      <h1>Uber Star</h1>
      <button onClick={uber}>Calcular</button>

    </div>
  )
}

export default UberStar
