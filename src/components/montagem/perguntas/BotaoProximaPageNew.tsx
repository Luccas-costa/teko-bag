"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BotaoProximaPageProps {
  pergunta?: number;
  disabled: boolean;
  handlerdisplay: () => void;
}

export default function BotaoProximaPageNew({
  pergunta,
  disabled,
  handlerdisplay,
}: BotaoProximaPageProps) {
  const [perguntaseis, setPerguntaseis] = useState(false);

  useEffect(() => {
    if (pergunta === 6) {
      setPerguntaseis(true);
    } else {
      setPerguntaseis(false);
    }
  }, [pergunta]);

  const handlerbuttondisplay = () => {
    if (pergunta === 6) {
      setTimeout(() => {
        handlerdisplay();
      }, 1000);
    } else {
      handlerdisplay();
    }
  };

  let caminho = "/pages/vitrine";

  return (
    <div
      className={`flex w-[90%] rounded-md items-center justify-center border border-zinc-950 shadow-lg ${
        disabled ? "pointer-events-none opacity-50" : ""
      }`}
    >
      {perguntaseis ? (
        <Link
          href={caminho}
          className='flex space-x-14 items-center justify-center w-full'
          onClick={handlerbuttondisplay}
        >
          <ArrowRight size={32} />
          <ArrowRight size={32} />
          <ArrowRight size={32} />
        </Link>
      ) : (
        <button
          className='flex space-x-14 items-center justify-center w-full'
          onClick={handlerbuttondisplay}
        >
          <ArrowRight size={32} />
          <ArrowRight size={32} />
          <ArrowRight size={32} />
        </button>
      )}
    </div>
  );
}
