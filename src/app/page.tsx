import BotaoIndicaScroll from "@/components/home/BotaoIndicaScroll";
import BotaoVoltarAoTopo from "@/components/home/BotaoVoltarAoTopo";
import Footer from "@/components/home/Footer/Footer";
import Header from "@/components/home/Header/Header";
import Main from "@/components/home/Main/Main";
import { Router } from "next/router";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teko Bag | home",
  description: "Ecomerce de eco bags",
};

export default function Home() {
  return (
    <div className='relative'>
      <Header />
      <Main />
      <Footer />

      {/* botao voltar ao topo */}
      <BotaoVoltarAoTopo />

      {/* botao indica scroll */}
      <BotaoIndicaScroll />
    </div>
  );
}
