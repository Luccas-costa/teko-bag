// esse ainda nao funciona por nao ter dominio pago, por isso nao da para fazer para enviar email para outro que nao seja o meu do site

import { TekoBagCompraEmailCliente } from "@/email/teko-bag-compra-cliente";
import { NextRequest, NextResponse } from "next/server";
import { useUserEmail } from "@/hooks/useUserEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req: NextRequest) {
  const userEmail = useUserEmail();
  try {
    const { subtitulo, email, instagram, nome } = await req.json();

    const data = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
      to: [`${userEmail}`],
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
