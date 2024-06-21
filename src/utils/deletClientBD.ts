import { createClient } from "@vercel/postgres";
import dotenv from 'dotenv';

dotenv.config(); // Certifique-se de carregar as variáveis de ambiente

// Função para deletar cliente do banco de dados
export async function DeletClientBD(clientId: string): Promise<void> {
  if (!process.env.POSTGRES_URL) {
    throw new Error("A variável de ambiente POSTGRES_URL não está definida.");
  }

  console.log("POSTGRES_URL:", process.env.POSTGRES_URL);

  const client = createClient({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false, // Apenas necessário se estiver usando SSL localmente
    },
  });

  try {
    await client.connect(); // Conecta ao banco de dados

    // Query para deletar o cliente pelo ID
    const query = {
      text: "DELETE FROM ClientesC WHERE id = $1",
      values: [clientId],
    };

    // Executa a query
    await client.query(query);

    console.log(`Cliente com ID ${clientId} deletado com sucesso.`);
  } catch (error) {
    console.error("Erro ao deletar cliente:", error);
    throw new Error("Erro ao deletar cliente do banco de dados");
  } finally {
    await client.end(); // Fecha a conexão com o banco de dados
  }
}
