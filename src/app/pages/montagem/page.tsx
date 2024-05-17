import React from "react";
import Image from "next/image";

import BotaoHome from "@/components/montagem/Aplicativo/perguntas/BotaoHome";
import BotaoProximaPage from "@/components/montagem/Aplicativo/perguntas/BotaoProximaPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treko Bag | montagem",
  description: "montagem de bags",
};

export default function Apresentacao() {
  return (
    <div className='w-screen h-screen bg-banner5 flex flex-col items-center justyfy-center lg:p-6 xl:p-14 relative '>
      <div className='p-3 2xl:w-1/4 md:w-1/2 w-3/4 border border-zinc-950 rounded-lg flex flex-col items-center justyfy-center shadow-lg my-auto'>
        <div className='pt-6 pb-4'>
          <Image
            src='/logo-transparente.png'
            width={100}
            height={100}
            alt='mascote'
          />
        </div>
        <div className='text-center text-xl font-medium'>
          Para encontrar a <span className='font-bold'>teko bag</span> ideal a
          sua necessidade, faremos 6 perguntas rapidas.
        </div>
        <div className='mt-6 text-center font-semibold text-lg text-zinc-800'>
          Prosseguir para primeira pergunta
        </div>
        <BotaoProximaPage pergunta={1} disabled={false} />
      </div>
      <BotaoHome />
    </div>
  );
}