"use client";

import { ArrowUp } from "@phosphor-icons/react";
import React from "react";

export default function BotaoVoltarAoTopo() {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='fixed bottom-5 right-5'>
      <div
        className='w-8 h-8 rounded-full bg-zinc-200/20 shadow-lg flex items-center justify-center cursor-pointer'
        onClick={scrollToTop}
        role='button'
      >
        <ArrowUp color='#fff' size={25} />
      </div>
    </div>
  );
}
