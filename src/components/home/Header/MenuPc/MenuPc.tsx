"use client";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

export default function MenuPc() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <ul className='flex space-x-4'>
        <li className='text-base font-semibold hover:border-b-2 border-black '>
          <a href='#inicio'>Home</a>
        </li>
        <li className='text-base font-semibold hover:border-b-2 border-black'>
          <a href='#sobre'>Sobre</a>
        </li>
        <li className='text-base font-semibold hover:border-b-2 border-black'>
          <a href='#footer'>Contato</a>
        </li>
        <li
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a href='https://www.instagram.com/tekobags/' target='_blank'>
            <InstagramLogo size={25} weight={isHovered ? "fill" : "regular"} />
          </a>
        </li>
      </ul>
    </>
  );
}
