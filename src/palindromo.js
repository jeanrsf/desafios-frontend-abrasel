import React, { useState } from 'react';

const ehPalindromo = (numero) => {
  const numeroString = numero.toString();
  const numeroInvertido = numeroString.split('').reverse().join('');
  return numeroString === numeroInvertido;
};

function Palindromos() {
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [palindromos, setPalindromos] = useState('');

  const gerarPalindromos = () => {
    const start = parseInt(inicio);
    const end = parseInt(fim);

    const resultados = []
    for (let index = start; index <= end; index++) {
      if (ehPalindromo(index)) {
        resultados.push(index)
      }

    }

    setPalindromos(resultados.join(', '));
  };

  return (
    <div>
      <h2>Verificador de Números Palíndromos</h2>
      <label>
        Início do Intervalo:
        <input
          type="number"
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
        />
      </label>
      <label>
        Fim do Intervalo:
        <input
          type="number"
          value={fim}
          onChange={(e) => setFim(e.target.value)}
        />
      </label>
      <button onClick={gerarPalindromos}>Verificar</button>

      <h3>Números Palíndromos Encontrados:</h3>
      <p>{palindromos}</p>
    </div>
  );
}

export default Palindromos;
