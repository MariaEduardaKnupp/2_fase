import { useContext } from "react"
import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"

function Dragao() {
    const {diaDeHoje, setDiaDeHoje} = useContext(GlobalContext)

    function trocarDia() {
        let dia = prompt("Que dia é hoje")
        setDiaDeHoje(dia)
    }
  return (
      <div>
      <Navbar />
      <h1>dagao</h1>
      <p>Porque eles soltam fogo. Menos nos dias de {diaDeHoje}</p>
      <button onClick={trocarDia}>Trocar dia</button>
    </div>
  )
}

export default Dragao
