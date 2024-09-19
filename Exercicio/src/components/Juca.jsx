import { useState } from "react"

function Juca() {
    const [juca, setJuca] = useState()
    function juquinha(){
    let hotel = Number(prompt("quantos dias vc quer ficar meu mano Juca"))
let desconto = (25 / 100)
let total 
let valor
let pagar

if(hotel <= 5){

    total = (hotel * 100)
    valor = (total * desconto)
    pagar = (total - valor)+150
alert(`juca tem que pagar ${pagar}`)
setJuca(pagar)

}else if(hotel >= 6 && hotel <= 10){

    total = (hotel * 90)
    valor = (total * desconto)
    pagar = (total - valor)+150
alert(`juca tem que pagar ${pagar}`)
setJuca(pagar)
}else if(hotel >= 11){

    total = (hotel * 80)
    valor = (total * desconto)
    pagar = (total - valor)+150
alert(`juca tem que pagar ${pagar}`)
setJuca(pagar)
}}
  return (
    <div>
      <h1>Juquinha meu consagrado</h1>
      <button onClick={juquinha}>Quer se hospedar nesse hotel do bob esponja</button>
      Pagamento:
      {juca}
    </div>
  )
}

export default Juca
