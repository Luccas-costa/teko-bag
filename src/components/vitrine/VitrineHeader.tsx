"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Tote } from "@phosphor-icons/react/dist/ssr";
import { SignedIn, UserButton } from "@clerk/nextjs";

import { useFirstName } from "@/hooks/useFirstName";

export default function VitrineHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // parte do nome do usuario

  const firstName = useFirstName();

  return (
    <header className='w-full py-3 flex justify-between items-center px-2 space-x-2'>
      <div className='rounded-xl 2xl:w-[88%] lg:w-[82%] md2:w-[80%] sm1:w-[76%] xm1:w-[72%] xm2:w-[68%] sm2:w-[65%] xm6:w-[62%] w-[59%] bg-white/15 xm5:py-[0.6rem] xm7:py-[0.9rem] py-[0.9rem] px-3 shadow-lg'>
        <ul className='font-semibold text-xs xm6:text-sm sm2:text-base xm3:text-lg xm1:text-xl text-white flex justify-between'>
          <li className='md:pl-4'>
            {firstName ? `Bem-vindo, ${firstName}` : "Carregando..."}
          </li>
          <li className='border-b border-r border-black px-1 active:border-none'>
            <Link href='/'>home</Link>
          </li>
        </ul>
      </div>
      <div className='rounded-xl 2xl:w-[12%] lg:w-[18%] md2:w-[20%] sm1:w-[24%] xm1:w-[28%] xm2:w-[32%] sm2:w-[35%] xm6:w-[38%] w-[41%] bg-white/15 py-1 px-3 shadow-lg'>
        <ul className='flex justify-between items-center'>
          <li>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
          <li onClick={handleClick}>
            <Tote size={28} weight={isOpen ? "fill" : "regular"} />
          </li>
          <li>
            <Image
              src='/logo-transparente.png'
              width={40}
              height={40}
              alt='logo'
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
