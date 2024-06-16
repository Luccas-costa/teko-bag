"use client";
import React, { useState } from "react";

import { MagnifyingGlass } from "@phosphor-icons/react";

export default function DashboardPesquisar() {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };
  return (
    <div className='flex space-x-5 mt-4 ml-3 items-center'>
      <div className='text-3xl text-zinc-300 font-semibold'>Clientes</div>
      <div
        className={`w-72 h-8 flex items-center space-x-2 border ${
          inputFocused ? "border-zinc-300" : "border-zinc-600"
        } rounded-[0.4rem] pl-1 pr-3`}
        onClick={handleInputFocus}
        onBlur={handleInputBlur}
      >
        <div>
          <MagnifyingGlass size={18} weight='bold' color='#849994' />
        </div>
        <input
          type='text'
          placeholder='Buscar Clientes...'
          className='bg-transparent placeholder-zinc-600 text-zinc-300 text-[0.9rem] focus:outline-none w-full shadow-lg shadow-zinc-900'
        ></input>
      </div>
    </div>
  );
}
