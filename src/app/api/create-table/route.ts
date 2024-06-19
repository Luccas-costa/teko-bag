import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE ClientesC ( id varchar(255), email varchar(255), instagram varchar(255), bairro varchar(255), rua varchar(255), complemento varchar(255), nurmo varchar(255), cidade varchar(255), cep varchar(255), itens varchar(255), quantidade varchar(255) )`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
