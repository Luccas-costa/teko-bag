"use server";

import { sql } from "@vercel/postgres";

export async function insertBD({
  id,
  email,
  telefone,
  instagram,
  bairro,
  rua,
  complemento,
  nurmo,
  cidade,
  cep,
  itens,
  quantidade,
  datacompra,
  atendido,
  emailverificacao,
}: {
  id: string;
  email: string;
  telefone: string;
  instagram: string;
  bairro: string;
  rua: string;
  complemento: string;
  nurmo: string;
  cidade: string;
  cep: string;
  itens: string;
  quantidade: string;
  datacompra: string;
  atendido: boolean;
  emailverificacao: string;
}) {
  try {
    console.log("Enviando dados para o banco de dados...");
    await sql`INSERT INTO ClientesC (id, email, instagram, bairro, rua, complemento, nurmo, cidade, cep, itens, quantidade, datacompra, telefone, atendido, emailverificacao) VALUES (${id}, ${email}, ${instagram}, ${bairro}, ${rua}, ${complemento}, ${nurmo}, ${cidade}, ${cep}, ${itens}, ${quantidade} , ${datacompra}, ${telefone}, ${atendido}, ${emailverificacao})`;
    console.log("Enviado com sucesso!");
  } catch (error) {
    console.log(error);
  }
}
