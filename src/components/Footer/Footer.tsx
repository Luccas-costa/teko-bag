"use client";
import React from "react";

import Logo from "./Logo/Logo";
import Time from "./Time/Time";
import Contatos from "./Contatos/Contatos";
import Developed from "./Developed/Developed";

export default function Footer() {
  return (
    <div className='flex flex-col' id='footer'>
      <div className='flex flex-col items-center pt-12 pl-16 pr-16'>
        <div className='flex gap-x-6 pb-12'>
          <Logo />

          <hr className='w-1 md:h-48 sm:h-52 h-[32vh] bg-zinc-600' />

          <Time />

          <hr className='w-1 md:h-48 sm:h-52 h-[32vh] bg-zinc-600' />

          <Contatos />
        </div>
      </div>
      <Developed />
    </div>
  );
}
