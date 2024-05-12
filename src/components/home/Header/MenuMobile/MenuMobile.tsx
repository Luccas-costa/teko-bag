"use client";
"use client";
import React, { useState } from "react";

import { X } from "@phosphor-icons/react/dist/ssr";
import { AlignJustify } from "lucide-react";

import { motion } from "framer-motion";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

export default function MenuMobile() {
  const [Itmenuopen, setItmenuopen] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handlemenu = () => {
    setItmenuopen(!Itmenuopen);
  };

  return (
    <>
      <div>
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
      </div>
      <div className='items-center justify-center'>
        <button
          onClick={handlemenu}
          className=' p-1 rounded-lg'
          style={{
            backgroundColor: Itmenuopen ? "#e0b1d1" : "transparent",
          }}
        >
          {Itmenuopen ? (
            <X size={30} weight='bold' />
          ) : (
            <AlignJustify size={30} />
          )}
        </button>
      </div>
      {Itmenuopen && (
        <motion.div
          className='absolute right-0 top-0 mt-[65px] mr-[7px]  sm:mt-[65px] sm:mr-[16px] rounded'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='relative'>
            <div className='z-20 w-4 h-4 bg-black absolute right-[14px] top-[-7px] rotate-45'></div>
            <div className='flex flex-col'>
              <motion.div
                className='z-10 w-[180px] h-[48px] bg-pink2 font-semibold text-lg text-white flex items-center justify-center rounded-t-lg border-b border-l border-white'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                home
              </motion.div>
              <motion.div
                className='z-5 w-[180px] h-[48px] bg-pink2 font-semibold text-lg text-white flex items-center justify-center border-b border-l border-white'
                initial={{ opacity: 1, y: -48 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -48 }}
                transition={{ duration: 0.5 }}
              >
                Sobre
              </motion.div>
              <motion.div
                className='w-[180px] h-[48px] bg-pink2 font-semibold text-lg text-white flex items-center justify-center rounded-b-lg border-b border-l border-white '
                initial={{ opacity: 1, y: -96 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -96 }}
                transition={{ duration: 0.6 }}
              >
                Contato
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
