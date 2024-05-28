import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

interface BotaoProximaPageProps {
  pergunta: number;
  disabled: boolean;
  onClick?: () => void;
}

export default function BotaoProximaPage({
  pergunta,
  disabled,
  onClick,
}: BotaoProximaPageProps) {
  let caminho = "/pages/montagem/perguntas";
  if (pergunta == 2) {
    caminho = "/pages/vitrine";
  } else if (pergunta > 2) {
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
        onClick={onClick}
      >
        <ArrowRight size={32} />
        <ArrowRight size={32} />
        <ArrowRight size={32} />
      </Link>
    </div>
  );
}
