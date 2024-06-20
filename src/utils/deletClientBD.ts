import { Client } from "@vercel/postgres";

// Função para deletar cliente do banco de dados
export async function DeletClientBD(clientId: string): Promise<void> {
  const client = new Client({
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
