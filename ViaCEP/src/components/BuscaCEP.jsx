import React, { useState } from 'react';
import { buscarEndereco } from '../services/api';
import '../App.css';

const BuscaCEP = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState(null);

  const handleBuscarEndereco = async () => {
    try {
      const data = await buscarEndereco(cep);
      setEndereco(data);
      setErro(null);
    } catch (error) {
      setEndereco(null);
      setErro(error.message);
    }
  };

  return (
    <div className="busca-cep">
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={handleBuscarEndereco}>Buscar</button>

      {erro && <p className="erro">{erro}</p>}

      {endereco && (
        <div className="endereco">
          <p><strong>CEP:</strong> {endereco.cep}</p>
          <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade}</p>
          <p><strong>Estado:</strong> {endereco.uf}</p>
        </div>
      )}
    </div>
  );
};

export default BuscaCEP;
