// confirmarDados.ts

export interface DadosType {
  instagram: string;
  telefone: string;
  cep: string;
  email: string;
  bairro: string;
  rua: string;
  complemento: string;
  numero: string;
  cidade: string;
  // Adicione outras propriedades conforme necessário
}

// Inicializa como um array vazio de DadosType
export const Dados: DadosType[] = [];
