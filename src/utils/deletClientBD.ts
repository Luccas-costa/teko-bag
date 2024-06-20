import { createPool } from "@vercel/postgres";

const postgresUrl =
  process.env.POSTGRES_URL ||
  "postgres://default:WzFiPHu40jEG@ep-lucky-mouse-a4i2wfc3-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require";

const pool = createPool({
  connectionString: postgresUrl,
});

export async function DeletClientBD(clientId: string): Promise<number> {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM ClientesC WHERE id = $1`, [
      clientId,
    ]);
    client.release(); // Liberar cliente de volta ao pool
    return result.rowCount; // Retorna o número de linhas afetadas (deletadas)
  } catch (error) {
    console.error("Erro ao deletar cliente:", error);
    throw new Error("Erro ao deletar cliente do banco de dados");
  }
}
