

function Comerciante() {

  function lucro(){
    let produto = Number(prompt("Digite o valor do produto:"))
    let desconto = 0.3
    let desconto1 = 0.45
    let conta,conta1

    if(produto <= 20){
        conta = produto * desconto1 
        conta1 = conta + produto 
        alert(`Seu valor de lucro é ${conta.toFixed(2)} , Valor total de venda: ${conta1.toFixed(2)}`)
    }
    else if(produto > 20)
        conta = produto * desconto 
        conta1 = conta + produto 
        alert(`Seu valor de lucro é ${conta.toFixed(2)} , Valor total de venda: ${conta1.toFixed(2)}`)
  }
  return (
    <div className='comercio'>
      <h1>Lucro</h1>
      <button onClick={lucro}>Calcular</button>
    </div>
  )
}

export default Comerciante
