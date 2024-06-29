"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Time from "./Time/Time";
import Contatos from "./Contatos/Contatos";
import Developed from "./Developed/Developed";
import Transicao3 from "../Main/Transicoes/Transicao3/Transicao3";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 560);
    };

    handleResize(); // Chamar a função inicialmente para definir o estado
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>     
    <motion.div
      className='flex flex-col bg-green2'
      id='footer'
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <Transicao3 />
      <div className='flex flex-col items-center pt-12 pl-16 pr-16 '>
        <div className='flex justify-evenly gap-x-6 pb-12'>
          <div className='flex items-center justify-center'>
            {isMobile && (
              <Image
                src='/logo-transparente.png'
                width={125}
                height={125}
                alt='logo'
              />
            )}
          </div>

          <hr className='w-1 md:h-48 sm:h-52 h-[32vh] bg-zinc-600 shadow-lg border border-zinc-600 rounded' />
          <Time />
          <hr className='w-1 md:h-48 sm:h-52 h-[32vh] bg-zinc-600 shadow-lg border border-zinc-600 rounded' />
          <Contatos />
        </div>
      </div>
      <Developed />
    </motion.div>
    </div>
  );
}
