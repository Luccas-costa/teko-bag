"use client";

import { ArrowDown } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BotaoIndicaScroll() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 25) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='fixed top-[90vh] left-1/2 -translate-x-1/2 z-50'>
      {isVisible && (
        <motion.a
          href='#impacto'
          className='w-10 h-10 rounded-full bg-zinc-200/20 shadow-lg flex items-center justify-center'
          role='button'
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown color='#fff' size={30} />
        </motion.a>
      )}
    </div>
  );
}
