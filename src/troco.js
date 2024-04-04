import React, { useState } from 'react';

const calcularNotasTroco = (troco) => {
  let trocoRestante = troco;
  const notasTroco = {};

  // Calcula quantidade de notas de 100
  notasTroco[100] = Math.floor(trocoRestante / 100);
  trocoRestante %= 100;

  // Calcula quantidade de notas de 10
  notasTroco[10] = Math.floor(trocoRestante / 10);
  trocoRestante %= 10;

  // As notas restantes serão de 1 real
  notasTroco[1] = trocoRestante;

  return notasTroco;
};

function Troco() {
  const [valorCompra, setValorCompra] = useState('');
  const [valorEntregue, setValorEntregue] = useState('');
  const [troco, setTroco] = useState('');
  const [notas, setNotas] = useState({});

  const calcularTroco = () => {
    const compra = parseInt(valorCompra);
    const entregue = parseInt(valorEntregue);
    const trocoCalculado = entregue - compra;
    const notasTroco = calcularNotasTroco(trocoCalculado);

    setTroco(trocoCalculado);
    setNotas(notasTroco);
  };


  return (
    <div>
      <h2>Calculadora de Troco</h2>
      <label>
        Valor da Compra:
        <input
          type="number"
          value={valorCompra}
          onChange={(e) => setValorCompra(e.target.value)}
        />
      </label>
      <label>
        Valor Entregue:
        <input
          type="number"
          value={valorEntregue}
          onChange={(e) => setValorEntregue(e.target.value)}
        />
      </label>
      <button onClick={calcularTroco}>Calcular Troco</button>

      <h3>Troco: R$ {troco}</h3>
      <h4>Quantidade de Notas:</h4>
      <ul>
        {Object.entries(notas).map(([valorNota, quantidade]) => (
          <li key={valorNota}>
            {quantidade} nota(s) de R$ {valorNota}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Troco;
