"use client";

import Image from "next/image";
import Imagem from "../../public/favicon.ico";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PageTransition2 } from "../utils/animation";

export default function Template({ children }: { children: React.ReactNode }) {
  const [showCursorNone, setShowCursorNone] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCursorNone(false);
    }, 2500); // 2.5 segundos

    return () => clearTimeout(timeout);
  }, []); // Executa apenas uma vez na montagem do componente

  return (
    <div className={showCursorNone ? "cursor-none" : ""}>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-black z-50 fixed top-0 left-0 w-[20%]'
        initial='initial'
        animate='animate'
        variants={PageTransition2}
        transition={{ duration: 1.4 }}
      ></motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-black z-50 fixed top-0 left-[20%] w-[20%]'
        initial='initial'
        animate='animate'
        variants={PageTransition2}
        transition={{ duration: 1.6 }}
      ></motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-black z-50 fixed top-0 left-[40%] w-[20%] flex items-center justify-center'
        initial='initial'
        animate='animate'
        variants={PageTransition2}
        transition={{ duration: 1.8 }}
      >
        <Image src={Imagem} alt='logo' width={100} height={100} />
      </motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-black z-50 fixed top-0 left-[60%] w-[20%]'
        initial='initial'
        animate='animate'
        variants={PageTransition2}
        transition={{ duration: 2 }}
      ></motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-black z-50 fixed top-0 left-[80%] w-[20%]'
        initial='initial'
        animate='animate'
        variants={PageTransition2}
        transition={{ duration: 2.2 }}
      ></motion.div>
      {children}
    </div>
  );
}
