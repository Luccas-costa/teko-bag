"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Logo() {
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
  );
}
