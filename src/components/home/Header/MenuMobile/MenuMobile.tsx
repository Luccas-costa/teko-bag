"use client";
import React, { useState } from "react";

import { X } from "@phosphor-icons/react/dist/ssr";
import { AlignJustify } from "lucide-react";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

export default function MenuMobile() {
  const [Itmenuopen, setItmenuopen] = useState(false);

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
        <div className='absolute right-0 top-0 w-[180px] h-[144px] mt-[65px] mr-[7px]  sm:mt-[65px] sm:mr-[16px] bg-pink1 rounded'>
          <div className='relative'>
            <div className='w-4 h-4 bg-black absolute right-[14px] top-[-7px] rotate-45'></div>
            <div className='flex flex-col space-y-3'>
              <div className='text-base font-semibold text-center text-white pt-2'>
                <a href='#inicio'>Home</a>
              </div>
              <hr />
              <div className='text-base font-semibold text-center text-white'>
                <a href='#sobre'>Sobre</a>
              </div>
              <hr />
              <div className='text-base font-semibold text-center text-white'>
                <a href='#footer'>Contato</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
