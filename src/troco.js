import React, { useState } from 'react';

const calcularNotasTroco = (troco) => {
  let trocoRestante = troco;
  const notasTroco = {};

  // notas de 100
  notasTroco[100] = Math.floor(trocoRestante / 100);
  trocoRestante %= 100;

  // notas de 10
  notasTroco[10] = Math.floor(trocoRestante / 10);
  trocoRestante %= 10;

  // notas d 1 real
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
    <div className='troco'>
      <h2>Calculadora de Troco</h2>
        <div>
      <label>
        <input
        placeholder="Valor da Compra:"
          type="number"
          value={valorCompra}
          onChange={(e) => setValorCompra(e.target.value)}
        />
      </label>
      <label>
        
        <input
        placeholder="Valor Entregue:"

          type="number"
          value={valorEntregue}
          onChange={(e) => setValorEntregue(e.target.value)}
        />
      </label>
      <button onClick={calcularTroco}>Calcular Troco</button>
      </div>
<div>
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
    </div>
  );
}


export default Troco;
