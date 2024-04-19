import React from "react";
import Image from "next/image";

export default function Transicao3() {
  return (
    <div className='bg-yellow1'>
      <Image
        src='/transicao3.png'
        alt='ondas de transiçao'
        width={2000}
        height={100}
      />
    </div>
  );
}
