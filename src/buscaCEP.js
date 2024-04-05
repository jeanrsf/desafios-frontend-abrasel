import React, { useState } from 'react';
import axios from 'axios';

function CEP() {
  const [ceps, setCeps] = useState(['', '', '', '', '']);
  const [resultados, setResultados] = useState([]);

  const handleChange = (index, value) => {
    const newCeps = [...ceps];
    newCeps[index] = value;
    setCeps(newCeps);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newResultados = [];
    for (const cep of ceps) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        newResultados.push(response.data);
      } catch (error) {
        console.error(`CEP nao encontrado ${cep}:`, error);
      }
    }
    setResultados(newResultados);
  };

  return (
    <div className='cep'>
      <h2>Insira os CEPs:</h2>
      <div className='formulario-cep'>
        <form onSubmit={handleSubmit}>
          {ceps.map((cep, index) => (
            <input
              key={index}
              type="text"
              value={cep}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div>
        {resultados.map((resultado, index) => (
          <div key={index}>
            <h2>CEP {ceps[index]}:</h2>
            <h3>logradouro:{JSON.stringify(resultado.logradouro, null, 2)}</h3>
            <h3>complemento:{JSON.stringify(resultado.complemento, null, 2)}</h3>
            <h3>bairro:{JSON.stringify(resultado.bairro, null, 2)}</h3>
            <h3>localidade:{JSON.stringify(resultado.localidade, null, 2)}</h3>
            <h3>uf:{JSON.stringify(resultado.uf, null, 2)}</h3>
            <h3>ddd:{JSON.stringify(resultado.ddd, null, 2)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CEP;
