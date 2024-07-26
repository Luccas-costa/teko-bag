"use server";

import { sql } from "@vercel/postgres";

export async function alterarStatusAtendido({
  id,
  atendido,
}: {
  id: string;
  atendido: boolean;
}) {
  try {
    console.log("Atualizando status do campo atendido no banco de dados...");
    await sql`UPDATE ClientesC SET atendido = ${atendido} WHERE id = ${id}`;
    console.log("Status atualizado com sucesso!");
  } catch (error) {
    console.log("Erro ao atualizar o status:", error);
  }
}
