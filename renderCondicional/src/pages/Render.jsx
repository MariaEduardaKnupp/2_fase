import { useState } from "react"
import PainelAdm from "../components/PainelAdm"
import './Render.css'
import Produto18 from "../components/Produto18"
import UsuarioLogado from "../components/UsuarioLogado"
import Login from "../components/Login"

function Render() {
    const [adm, setAdm] = useState(true)
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)

  return (
    <div>
      <h1>Renderização condicionais</h1>
      <div className="render-container">
        <button onClick={() => {setAdm(true)}}>Adm</button>
        <button onClick={() => {setAdm(false)}}>usuário</button>
        { adm && <PainelAdm />}
      </div>
      <div className="render-container">
        <button onClick={() => {setIdade(idade - 1)}}>-</button>
        {idade}
        <button onClick={() => {setIdade(idade + 1)}}>+</button>
        { idade>=18 && <Produto18 />}
      </div>

      <div className="render-container">
        <button onClick={() => {setUsuario(true)}}>Logar</button>
        <button onClick={() => {setUsuario(false)}}>10Logar</button>
        {usuario ? <UsuarioLogado /> : <Login />}
      </div>

    </div>
  )
}

export default Render
