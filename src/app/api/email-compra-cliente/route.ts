import { TekoBagCompraEmailCliente } from "@/email/teko-bag-compra-cliente";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { subtitulo, email, instagram, nome } = await req.json();

    console.log(email);
    const data = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
      to: [email],
      subject: "Obrigado por comprar na teko bag!",
      react: TekoBagCompraEmailCliente({
        subtitulo,
        email,
        instagram,
        nome,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
