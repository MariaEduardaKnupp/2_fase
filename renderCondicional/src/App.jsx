import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Abacaxi from './pages/Abacaxi'
import Pedra from './pages/Pedra'
import Render from './pages/Render'

function App() {
  const [pagina, setPagina] = useState(<Home />)

  function mostrarHome(){
    setPagina(<Home />)
  }

  return (
    <>
     <nav>
      <button onClick={mostrarHome} >Home</button>
      <button onClick={ () => {setPagina (<Pedra />)}}>Pedra</button>
      <button onClick={ () => {setPagina (<Abacaxi />)}}>Abacaxi</button>
      <button onClick={ () => {setPagina (<Render />)}}>Render</button>
     </nav>
     {pagina}
    </>
  )
}

export default App
