import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import style from "@/app/pages/montagem/perguntas.module.css";

import BotaoProximaPage from "@/components/montagem/perguntas/BotaoProximaPage";

export const metadata: Metadata = {
  title: "Teko Bag | Concluído",
  description: "montagem de bags",
};

interface PerguntasConcluidasProps {
  display: boolean;
}

export default function PerguntasConcluidas({
  display,
}: PerguntasConcluidasProps) {
  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justyfy-center lg:p-6 xl:p-14 relative ${
        style.background
      }  ${display && "hidden"}`}
    >
      <div className='p-3 2xl:w-1/4 md:w-1/2 w-3/4 border bg-banner5/85 border-zinc-950 rounded-lg flex flex-col items-center justyfy-center shadow-lg my-auto'>
        <div className='pt-6 pb-4'>
          <Image
            src='/logo-transparente.png'
            width={100}
            height={100}
            alt='mascote'
          />
        </div>
        <div className='text-center text-xl font-medium'>
          Muito Obrigado, mas você ja respondeu todas as perguntas, entao ja
          pode prosseguir para a escolha de sua nova <br />
          <span className='font-bold'>teko bag</span>
        </div>
        <div className='mt-6 text-center font-semibold lg:text-lg sm:text-base text-xs text-zinc-800'>
          Prosseguir para escolher
        </div>
        <BotaoProximaPage pergunta={2} disabled={false} />
      </div>
    </div>
  );
}
