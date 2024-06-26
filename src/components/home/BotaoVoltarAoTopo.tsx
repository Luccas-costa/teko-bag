"use client";

import { ArrowUp } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";

export default function BotaoVoltarAoTopo() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='fixed bottom-5 right-5'>
      {isVisible && (
        <div
          className='w-8 h-8 rounded-full bg-zinc-200/20 shadow-lg flex items-center justify-center cursor-pointer'
          onClick={scrollToTop}
          role='button'
        >
          <ArrowUp color='#fff' size={25} />
        </div>
      )}
    </div>
  );
}
