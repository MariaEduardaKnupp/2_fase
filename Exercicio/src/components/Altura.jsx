import { useState } from "react";

function Altura() {
  const [inputAltura, setInputAltura] = useState('');
  const [inputGenero, setInputGenero] = useState('');
  const [maiorAltura, setMaiorAltura] = useState(0);
  const [menorAltura, setMenorAltura] = useState(999);
  const [contHomens, setContHomens] = useState(0);
  const [contMulheres, setContMulheres] = useState(0);

  function Pesquisa() {
    const altura = parseInt(inputAltura);

    if (altura > maiorAltura) {
      setMaiorAltura(altura);
    }

    if (altura < menorAltura) {
      setMenorAltura(altura);
    }

    if (inputGenero === "homem") {
      setContHomens(contHomens + 1);
    }
    if (inputGenero === "mulher") {
      setContMulheres(contMulheres + 1);
    }

    // Limpar os campos após análise
    setInputAltura('');
    setInputGenero('');
  }

  return (
    <div>
      <h1>Pesquisa de Habitantes</h1>
      <h3>Gênero</h3>
      <input
        type="text"
        value={inputGenero}
        onChange={(event) => setInputGenero(event.target.value)}
      />
      <h3>Altura</h3>
      <input
        type="number"  // Usar number para alturas
        value={inputAltura}
        onChange={(event) => setInputAltura(event.target.value)}
      />
      <br /><br />
      <button onClick={Pesquisa}>Analisar</button>

      <div>
        <h2>Resultados</h2>
        <p>Maior altura: {maiorAltura} cm</p>
        <p>Menor altura: {menorAltura} cm</p>
        <p>Total de homens: {contHomens}</p>
        <p>Total de mulheres: {contMulheres}</p>
      </div>
    </div>
  );
}

export default Altura;

