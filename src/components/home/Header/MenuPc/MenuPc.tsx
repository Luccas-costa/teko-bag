"use client";
import React, { useState } from "react";

import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
export default function MenuPc() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <ul className='flex space-x-4 items-center'>
        <li className='text-base font-semibold hover:border-b-2 border-black '>
          <a href='#inicio'>Home</a>
        </li>
        <li className='text-base font-semibold hover:border-b-2 border-black'>
          <a href='#sobre'>Sobre</a>
        </li>
        <li className='text-base font-semibold hover:border-b-2 border-black'>
          <a href='#footer'>Contato</a>
        </li>
        <li>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal'>
              <button className='uppercase bg-green1/50 rounded px-3 py-2 items-center font-bold active:bg-green3'>
                Login
              </button>
            </SignInButton>
          </SignedOut>
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
