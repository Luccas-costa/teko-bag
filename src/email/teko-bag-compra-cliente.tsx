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
            <Text
              style={paragraph}
              className='text-2xl text-zinc-600 text-center'
            >
              Olá {nome}
            </Text>
            <Text style={paragraph} className='text-center'>
              Gostaríamos de expressar nossa sincera gratidão por escolher a{" "}
              <span className='font-bold text-black'>Tekobags</span> para sua
              recente compra. Estamos muito felizes em saber que nossos produtos
              atendem às suas expectativas.
            </Text>
            <Text style={paragraph} className='text-center'>
              Em até 2 dias úteis, nossa equipe entrará em contato com você para
              confirmar o início da produção da sua encomenda e fornecer o prazo
              estimado para a entrega. Estamos à disposição para esclarecer
              quaisquer dúvidas ou prestar assistência adicional que você possa
              precisar.
            </Text>
            <Hr style={hr} />
            <Button
              style={button}
              href='https://teko-bag.vercel.app/pages/vitrine'
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
