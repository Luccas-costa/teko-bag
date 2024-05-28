"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import styles from "@/app/pages/montagem/perguntas.module.css";

import { salvarResposta } from "@/utils/perguntas";
import BotaoProximaPageNew from "./BotaoProximaPageNew";

interface PerguntaProps2 {
  display: boolean;
  handlerdisplay: () => void;
}

export default function Pergunta2({ display, handlerdisplay }: PerguntaProps2) {
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleRadioChange = (value: number) => {
    setIsRadioSelected(true);
    setSelectedOption(value);
  };

  const handleProximaPage = () => {
    if (selectedOption !== null) {
      salvarResposta(2, selectedOption); // Salvando a resposta para a pergunta 2
    }
  };

  return (
    <div
      className={`w-screen h-full flex flex-col items-center justyfy-center p-2 lg:p-6 xl:p-14 relative ${
        styles.background
      } ${display && "hidden"}`}
    >
      <div className='p-3 2xl:w-1/4 md:w-1/2 w-[90%] bg-banner5/85 border border-zinc-950 rounded-lg flex flex-col items-center justyfy-center shadow-lg my-auto relative'>
        <div className='pt-6 pb-4'>
          <Image
            src='/logo-transparente.png'
            width={100}
            height={100}
            alt={""}
          />
        </div>
        <div className='text-center text-xl font-medium'>
          O que o levou a nos escolher em vez da concorrência?
        </div>
        <form className='flex flex-col items-center w-full space-y-2 mt-6'>
          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={() => handleRadioChange(1)}
            />
            Qualidade
          </label>

          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={() => handleRadioChange(2)}
            />
            Sustentabilidade
          </label>
          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={() => handleRadioChange(3)}
            />
            Versatilidade
          </label>
          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={() => handleRadioChange(4)}
            />
            Estética
          </label>

          <label className='w-[90%] border border-black rounded-tl-none rounded-lg py-3 pl-2 flex gap-2 items-center font-semibold'>
            <input
              className={`${styles.customradio}`}
              type='radio'
              name='perguntas'
              onChange={() => handleRadioChange(5)}
            />
            Outros
          </label>
        </form>
        <div className='mt-6 text-center font-semibold lg:text-lg sm:text-base text-xs text-zinc-800'>
          Prosseguir para terceira pergunta
        </div>
        <BotaoProximaPageNew
          disabled={!isRadioSelected}
          handlerdisplay={handlerdisplay}
        />
        <div className='mt-6 mb-2'>
          <Link
            href='/'
            className='font-semibold text-black active:text-zinc-500'
          >
            voltar a home
          </Link>
        </div>
        <div className='absolute w-5 h-5 top-[9px] right-[30px] font-semibold text-2xl text-black/50'>
          <div className='absolute top-0 left-0'>2</div>
          <div className='absolute top-[6px] left-[12px] rotate-[4deg]'>/</div>
          <div className='absolute bottom-[-28px] right-[-14px]'>6</div>
        </div>
      </div>
    </div>
  );
}
