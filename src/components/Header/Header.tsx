"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { InstagramLogo, X } from "@phosphor-icons/react/dist/ssr";
import { AlignJustify } from "lucide-react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [Itmenuopen, setItmenuopen] = useState(false);

  const handlemenu = () => {
    setItmenuopen(!Itmenuopen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Chamar a função inicialmente para definir o estado
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className='bg-green2 sticky top-0 z-10'>
      <div className='flex items-center justify-between 2xl:mr-14 2xl:ml-14 xl:mr-10 xl:ml-10 md:mr-6 md:ml-6 sm:mr-2 sm:ml-2 mr-0 ml-0 p-3'>
        <div>
          <Image
            src='/logo-transparente.png'
            width={50}
            height={50}
            alt='logo'
          />
        </div>
        {isMobile ? (
          <>
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
                    <div className='text-base hover:text-lg font-semibold text-center text-white pt-2'>
                      Home
                    </div>
                    <hr />
                    <div className='text-base hover:text-lg font-semibold text-center text-white'>
                      Sobre
                    </div>
                    <hr />
                    <div className='text-base hover:text-lg font-semibold text-center text-white'>
                      <a
                        href='https://www.instagram.com/tekobags/'
                        target='_blank'
                      >
                        Contato
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
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
        )}
      </div>
    </header>
  );
}
