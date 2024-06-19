"use server";

import { sql } from "@vercel/postgres";

export async function insertBD({
  id,
  email,
  instagram,
  bairro,
  rua,
  complemento,
  nurmo,
  cidade,
  cep,
  itens,
  quantidade,
}: {
  id: string;
  email: string;
  instagram: string;
  bairro: string;
  rua: string;
  complemento: string;
  nurmo: string;
  cidade: string;
  cep: string;
  itens: string;
  quantidade: string;
}) {
  try {
    await sql`INSERT INTO ClientesC (id, email, instagram, bairro, rua, complemento, nurmo, cidade, cep, itens, quantidade) VALUES (${id}, ${email}, ${instagram}, ${bairro}, ${rua}, ${complemento}, ${nurmo}, ${cidade}, ${cep}, ${itens}, ${quantidade})`;
  } catch (error) {
    console.log(error);
  }
}
