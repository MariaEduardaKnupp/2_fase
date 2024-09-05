import { useState } from "react"

function Garcom() {

    const [resultado, setResultado] = useState()

function emprestimo(){
let salario = Number(prompt("Qual seu salário:"))
let prestacao = Number(prompt("Qual o número da prestacao:"))
let calculo1, calculo2
calculo1 = 30/100
calculo2 = salario * calculo1
 
if(prestacao > calculo2){
    alert("Não pode pegar um emprestimo")
}
else if(prestacao < calculo2){
    alert("Pode fazer o emprestimo")
}
}
  return (
    <div>
      <button onClick={emprestimo}>Emprestimo</button>
    </div>
  )
}

export default Garcom
