import { TekoBagCompraEmail } from "@/email-templates/teko-bag-compra";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
      to: ["lucaspcosta70@gmail.com"],
      subject: "Bem viadasndo ao Teko Bag",
      react: TekoBagCompraEmail({ name: "atsddasdas" }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
