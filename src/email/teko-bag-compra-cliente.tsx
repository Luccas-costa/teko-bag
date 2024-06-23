import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface TekoBagCompraEmailProps {
  subtitulo?: string;
  comprador?: string;
  email?: string;
  instagram?: string;
  nome?: string;
}

export const TekoBagCompraEmailCliente = ({
  subtitulo = "",
  comprador = "",
  email = "",
  instagram = "",
  nome = "",
}: TekoBagCompraEmailProps) => (
  <Html>
    <Head />
    <Preview>{subtitulo}</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section className='w-full h-full py-2 px-4'>
            <Img
              src='	https://teko-bag.vercel.app/_next/image?url=%2Flogo-transparente.png&w=64&q=75'
              width='50'
              height='50'
              alt='Teko bag'
              className='mx-auto w-[150px] h-[110px]'
            />
            <Hr style={hr} />
            <Text style={paragraph} className='text-center mb-10'>
              Muito obrigado por nos escolher para a compra de sua{" "}
              <span className='font-bold text-black'>teko bag</span>. Em no
              máximo 2 dias uteis um de nossos atendentes entrara em contato
              para confirmar sua entrega{" "}
              <span className='font-bold text-black'>47:56:43</span> horas até o
              termino dos dois dias uteis.
            </Text>
            <Text style={paragraph} className='text-center'>
              A compra foi feita no nome de:{" "}
              <span className='font-semibold text-black'>{nome}</span>
              <span className='font-semibold text-black'>{comprador}</span>{" "}
              provedor do email:{" "}
              <span className='font-semibold text-black'>{email}</span> e do
              instagram:{" "}
              <span className='font-semibold text-black'>{instagram}</span>
            </Text>
            <Hr style={hr} />
            <Button
              style={button}
              href='https://teko-bag.vercel.app/pages/dashboard'
            >
              View site Teko Bag
            </Button>
            <Text style={paragraph}>
              Quaisquer dúvida ou pergunta, por favor entrar em contato com o{" "}
              {""}
              <Link style={anchor} href='https://www.instagram.com/tekobags/'>
                support Instagram
              </Link>
              . Estaremos à disposição para responder qualquer questionamento.
            </Text>
            <Text style={paragraph}>— The Teko-Bag team</Text>
            <Hr style={hr} />
            <Text style={footer}>
              © {new Date().getFullYear()} Teko bag. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default TekoBagCompraEmailCliente;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#86B27A",
};

const button = {
  backgroundColor: "#86B27A",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "95%",
  padding: "10px",
};

const footer = {
  color: "#86B27A",
  fontSize: "12px",
  lineHeight: "16px",
};
