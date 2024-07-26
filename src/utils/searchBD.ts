"use server";

import { sql } from "@vercel/postgres";
import { Client } from "@/types/Client";

// Função para buscar todos os registros da tabela ClientesC
export async function SearchBD(): Promise<Client[]> {
  try {
    const result = await sql`SELECT * FROM ClientesC`;
    const clientes: Client[] = result.rows.map((row) => ({
      id: row.id,
      email: row.email,
      telefone: row.telefone,
      instagram: row.instagram,
      bairro: row.bairro,
      rua: row.rua,
      complemento: row.complemento,
      nurmo: row.nurmo,
      cidade: row.cidade,
      cep: row.cep,
      itens: row.itens,
      quantidades: row.quantidade,
      nome: row.instagram, // Usando o instagram como nome
      dataCompra: row.datacompra, // Valor aleatório para dataCompra
      atendido: row.atendido,
    }));
    return clientes;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao buscar dados do banco de dados");
  }
}
