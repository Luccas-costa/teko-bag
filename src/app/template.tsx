"use client";

import { motion } from "framer-motion";
import { PageTransition } from "../utils/animation";
import { useState, useEffect } from "react";

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
        className='min-h-screen bg-banner1 z-50 fixed top-0 left-0 w-[20%]'
        initial='initial'
        animate='animate'
        variants={PageTransition}
        transition={{ duration: 1.4 }}
      ></motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-banner2 z-50 fixed top-0 left-[20%] w-[20%]'
        initial='initial'
        animate='animate'
        variants={PageTransition}
        transition={{ duration: 1.6 }}
      ></motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-banner3 z-50 fixed top-0 left-[40%] w-[20%]'
        initial='initial'
        animate='animate'
        variants={PageTransition}
        transition={{ duration: 1.8 }}
      ></motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-banner4 z-50 fixed top-0 left-[60%] w-[20%]'
        initial='initial'
        animate='animate'
        variants={PageTransition}
        transition={{ duration: 2 }}
      ></motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-banner5 z-50 fixed top-0 left-[80%] w-[20%]'
        initial='initial'
        animate='animate'
        variants={PageTransition}
        transition={{ duration: 2.2 }}
      ></motion.div>
      {children}
    </div>
  );
}
