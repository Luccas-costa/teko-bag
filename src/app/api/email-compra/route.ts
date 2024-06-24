import { NextRequest, NextResponse } from "next/server";
import { TekoBagCompraEmail } from "@/email/teko-bag-compra";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { subtitulo, email, instagram, nome } = await req.json();

    const data = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
      to: ["trekobag@gmail.com", "lucaspcosta70@gmail.com"],
      subject: "Compraram uma teko bag no site, vamo trabalha!",
      react: TekoBagCompraEmail({
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
