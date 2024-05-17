
import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

interface BotaoProximaPageProps {
  pergunta: number;
  disabled: boolean;
}

export default function BotaoProximaPage({
  pergunta,
  disabled,
}: BotaoProximaPageProps) {
  let caminho = "/pages/montagem/perguntas/pergunta1";
  if (pergunta === 2) {
    caminho = "/pages/montagem/perguntas/pergunta2";
  } else if (pergunta === 3) {
    caminho = "/pages/montagem/perguntas/pergunta3";
  } else if (pergunta === 4) {
    caminho = "/pages/montagem/perguntas/pergunta4";
  } else if (pergunta === 5) {
    caminho = "/pages/montagem/perguntas/pergunta5";
  } else if (pergunta === 6) {
    caminho = "/pages/montagem/perguntas/pergunta6";
  } else if (pergunta > 6) {
    caminho = "/";
  }

  return (
    <div
      className={`flex w-[90%] rounded-md items-center justify-center border border-zinc-950 shadow-lg ${
        disabled ? "pointer-events-none opacity-50" : ""
      }`}
    >
      <Link
        href={disabled ? "#" : caminho}
        className='flex space-x-14 items-center justify-center w-full'
      >
        <ArrowRight size={32} />
        <ArrowRight size={32} />
        <ArrowRight size={32} />
      </Link>
    </div>
  );
}
