import { useState } from "react";


function ControleVeiculos() {
  const [modelo, setModelo] = useState();
  const [anoFabricacao, setAnoFabricacao] = useState();
  const [qtdPortas, setQtdPortas] = useState();
  const [marca, setMarca] = useState();
  const [veiculo, setVeiculo] = useState();
  const [rodas, setRodas] = useState();
  const [passageiro, setPassageiro] = useState();

 
    return(
        <div className="garagem">
            <label> 
                moto ou carro
                <input
                type="text"
                value={veiculo}
                onChange={(e) => setVeiculo(e.target.value)}
            />

            </label>
            {veiculo !== 'moto' && (
            <div className="veiculo">
            <label>
                
            <input
            placeholder="Modelo"
                type="text"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
            />
            </label>
            <label>
                
            <input
            placeholder="Ano de Fabricacao"
                type="number"
                value={anoFabricacao}
                onChange={(e) => setAnoFabricacao(e.target.value)}
            />
            </label>
            <label>
               
            <input
            placeholder=" Quantidade de Portas"
                type="number"
                value={qtdPortas}
                onChange={(e) => setQtdPortas(e.target.value)}
            />
            </label>
            <label>
                
            <input
            placeholder="Marca"
                type="text"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
            />
            </label>
            </div>
            )}


            {veiculo === 'moto' && (
            <div className="moto">
            <div className="veiculo">
            <label>
                
            <input
            placeholder="Modelo"
                type="text"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
            />
            </label>
            <label>
                
            <input
            placeholder="Ano de Fabricacao"
                type="number"
                value={anoFabricacao}
                onChange={(e) => setAnoFabricacao(e.target.value)}
            />
            </label>
            <label>
                
            <input
            placeholder="Quantidade de Portas"
                type="number"
                value={qtdPortas}
                onChange={(e) => setQtdPortas(e.target.value)}
            />
            </label>
            <label>
                
            <input
            placeholder="Marca"
                type="text"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
            />
            </label>
            
            <label>
                
            <input
            placeholder="rodas"
                type="number"
                value={rodas}
                onChange={(e) => setRodas(e.target.value)}
            />
            </label>
            <label>
                
            <input
            placeholder="Passageiro"
                type="text"
                value={passageiro}
                onChange={(e) => setPassageiro(e.target.value)}
            />
            </label>
            </div>
            </div>
            )}
        </div>
    )
}
export default ControleVeiculos;
