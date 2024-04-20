"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className='bg-green2 sticky top-0 z-10'>
      <div className='flex items-center justify-between mr-14 ml-14 p-3'>
        <div>
          <Image
            src='/logo-transparente.png'
            width={50}
            height={50}
            alt='logo'
          />
        </div>
        <ul className='flex space-x-4'>
          <li className='text-base font-semibold hover:border-b-2 border-black '>
            Home
          </li>
          <li className='text-base font-semibold hover:border-b-2 border-black'>
            Sobre
          </li>
          <li className='text-base font-semibold hover:border-b-2 border-black'>
            <a href='https://www.instagram.com/tekobags/' target='_blank'>
              Contato
            </a>
          </li>
          <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href='https://www.instagram.com/tekobags/' target='_blank'>
              <InstagramLogo
                size={25}
                weight={isHovered ? "fill" : "regular"}
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
