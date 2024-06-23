/* eslint-disable react/no-unescaped-entities */
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

export const TekoBagCompraEmail = ({
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
              src='/public/logo-transparente.png'
              width='50'
              height='50'
              alt='Teko bag'
              className='mx-auto w-[150px] h-[150px] bg-green2 rounded-lg'
            />
            <Hr style={hr} />
            <Text style={paragraph} className='text-center mb-10'>
              Acabaram de fazer uma compra no site da{" "}
              <span className='font-bold text-black'>teko bag</span> entao
              partiu la atender que temos{" "}
              <span className='font-bold text-black'>47:56:43</span> horas até o
              termino dos dois dias uteis
            </Text>
            <Text style={paragraph} className='text-center'>
              A compra foi feita no nome de: {nome}
              <span className='font-semibold text-black'>{comprador}</span>{" "}
              provedor do email:{" "}
              <span className='font-semibold text-black'>{email}</span> e do
              instagram:{" "}
              <span className='font-semibold text-black'>{instagram}</span>
            </Text>
            <Hr style={hr} />
            <Text style={paragraph} className='text-center'>
              Para acessar o dashboard do{" "}
              <Link
                style={anchor}
                href='https://teko-bag.vercel.app/pages/dashboard'
              >
                site
              </Link>{" "}
              <br />
              <span className='font-semibold text-zinc-500'>
                "Lembrar de estar com o login de ADM no site"
              </span>
            </Text>
            <Button
              style={button}
              href='https://teko-bag.vercel.app/pages/dashboard'
            >
              View your Teko Bag Dashboard
            </Button>
            <Text style={paragraph}>
              Quaisquer duvida ou pergunta, por favor entrar em contato com o{" "}
              {""}
              <Link style={anchor} href=''>
                support site
              </Link>
              . Estaremos a disposição para responder quaiquer questionamento.
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

export default TekoBagCompraEmail;

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
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#86B27A",
  fontSize: "12px",
  lineHeight: "16px",
};
