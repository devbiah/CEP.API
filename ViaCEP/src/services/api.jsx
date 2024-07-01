export async function buscarEndereco(cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('CEP não encontrado');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar CEP:', error.message);
      throw error;
    }
  }
  