import React from "react";
import Image from "next/image";

export default function Transicao1() {
  return (
    <div className='bg-brown1'>
      <Image
        src='/waves.svg'
        alt='ondas de transiçao'
        width={2000}
        height={50}
      />
    </div>
  );
}
