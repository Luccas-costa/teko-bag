"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../perguntas.module.css"

import BotaoProximaPage from "@/components/montagem/Aplicativo/perguntas/BotaoProximaPage";

// Definindo o tipo para as opções
interface Option {
  id: number;
  label: string;
  bgColor: string;
}

export default function Pagina1() {
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (option: Option['id']) => {
    setSelectedOption(option);
    setIsRadioSelected(true);
  };

  const options: Option[] = [
    { id: 1, label: "red", bgColor: "bg-red-500" },
    { id: 2, label: "blue", bgColor: "bg-blue-500" },
    { id: 3, label: "green", bgColor: "bg-green-500" },
    { id: 4, label: "yellow", bgColor: "bg-yellow-500" },
    { id: 5, label: "purple", bgColor: "bg-purple-500" },
    { id: 6, label: "pink", bgColor: "bg-pink-500" },
    { id: 7, label: "white", bgColor: "bg-slate-300" },
    { id: 8, label: "laranja", bgColor: "bg-orange-500" },
    { id: 9, label: "black", bgColor: "bg-neutral-950" },
  ];

  return (
    <div className='w-screen h-full bg-banner5 flex flex-col items-center justify-center p-2 lg:p-6 xl:p-14 relative'>
      <div className='p-3 2xl:w-1/4 md:w-1/2  w-4/5 border border-zinc-950 rounded-lg flex flex-col items-center justify-center shadow-lg my-auto'>
        <div className='pt-6 pb-4'>
          <Image
            src='/logo-transparente.png'  
            width={100}
            height={100}
            alt={""}
          />
        </div>
        <div className='text-center text-xl font-medium'>       
            Em quais lugares, você usaria nossas <span className='font-bold'>teko bag{"'"}s</span>?
        </div>
        <div className='grid grid-cols-3 gap-4 mt-6'>
          {options.map((option) => (
            <div
              key={option.id}
              className={`w-40 h-20 ${option.bgColor} flex items-center justify-center rounded-lg border-l-[1px] border-b-[5px] cursor-pointer  ${selectedOption === option.id ? "border-banner5" : "border-black"}`}
              onClick={() => handleOptionClick(option.id)}
            />
          ))}
        </div>
        <div className='mt-6 text-center font-semibold lg:text-lg sm:text-base text-xs text-zinc-800'>
          Prosseguir para quarta pergunta
        </div>
        <BotaoProximaPage pergunta={4} disabled={!isRadioSelected} />
        <div className="mt-6 mb-2">
            <Link href='/' className="font-semibold text-black active:text-zinc-500">voltar a home</Link>
        </div>
      </div>
    </div>
  );
}
