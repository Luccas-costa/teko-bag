"use client";
import React, { useState, useEffect } from "react";

import Logo from "./Logo/Logo";
import MenuPc from "./MenuPc/MenuPc";
import MenuMobile from "./MenuMobile/MenuMobile";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Chamar a função inicialmente para definir o estado
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className='bg-green2 fixed top-0 z-10'> 
      <div className='flex items-center justify-between 2xl:mr-14 2xl:ml-14 xl:mr-10 xl:ml-10 md:mr-6 md:ml-6 sm:mr-2 sm:ml-2 mr-0 ml-0 p-3'>
        <Logo />
        {isMobile ? <MenuMobile /> : <MenuPc />}
      </div>
    </header>
  );
}
