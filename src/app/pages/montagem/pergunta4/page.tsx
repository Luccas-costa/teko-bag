"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import styles from "../perguntas.module.css";
import { salvarResposta } from "@/utils/perguntas"; // Importe a função para salvar a resposta
import BotaoProximaPage from "@/components/montagem/perguntas/BotaoProximaPage";

// Definindo o tipo para as opções
interface Option {
  id: number;
  label: string;
  bgColor: string;
  posbgColor: string;
}

export default function Pagina4() {
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (option: Option["id"]) => {
    setSelectedOption(option);
    setIsRadioSelected(true);
  };

  const handleProximaPage = () => {
    if (selectedOption !== null) {
      salvarResposta(4, selectedOption); // Salvar a resposta para a pergunta 4
    }
  };

  const options: Option[] = [
    { id: 1, label: "red", bgColor: "bg-red-500", posbgColor: "bg-red-800" },
    { id: 2, label: "blue", bgColor: "bg-blue-500", posbgColor: "bg-blue-800" },
    {
      id: 3,
      label: "green",
      bgColor: "bg-green-500",
      posbgColor: "bg-green-800",
    },
    {
      id: 4,
      label: "yellow",
      bgColor: "bg-yellow-500",
      posbgColor: "bg-yellow-800",
    },
    {
      id: 5,
      label: "purple",
      bgColor: "bg-purple-800",
      posbgColor: "bg-purple-950",
    },
    { id: 6, label: "pink", bgColor: "bg-pink-500", posbgColor: "bg-pink-800" },
    {
      id: 7,
      label: "white",
      bgColor: "bg-slate-300",
      posbgColor: "bg-slate-500",
    },
    {
      id: 8,
      label: "orange",
      bgColor: "bg-orange-500",
      posbgColor: "bg-orange-800",
    },
    {
      id: 9,
      label: "black",
      bgColor: "bg-neutral-950",
      posbgColor: "bg-neutral-700",
    },
  ];

  return (
    <div
      className={`w-screen h-full flex flex-col items-center justify-center p-2 lg:p-6 xl:p-14 relative ${styles.background}`}
    >
      <div className='p-3 2xl:w-1/4 md:w-1/2 w-[90%] bg-banner5/85 border border-zinc-950 rounded-lg flex flex-col items-center justify-center shadow-lg my-auto'>
        <div className='pt-6 pb-4'>
          <Image
            src='/logo-transparente.png'
            width={100}
            height={100}
            alt={""}
          />
        </div>
        <div className='text-center text-xl font-medium'>
          Qual é sua cor favorita?
        </div>
        <div className='grid grid-cols-3 gap-4 mt-6 w-[95%]'>
          {options.map((option) => (
            <div
              key={option.id}
              className={`w-[100%] h-20 ${
                selectedOption === option.id
                  ? option.posbgColor
                  : option.bgColor
              } flex items-center justify-center rounded-lg border-l-[1px] border-b-[5px] cursor-pointer border-black`}
              onClick={() => handleOptionClick(option.id)}
            />
          ))}
        </div>
        <div className='mt-6 text-center font-semibold lg:text-lg sm:text-base text-xs text-zinc-800'>
          Prosseguir para quarta pergunta
        </div>
        <BotaoProximaPage
          pergunta={5}
          disabled={!isRadioSelected}
          onClick={handleProximaPage}
        />
        <div className='mt-6 mb-2'>
          <Link
            href='/'
            className='font-semibold text-black active:text-zinc-500'
          >
            voltar a home
          </Link>
        </div>
      </div>
    </div>
  );
}
