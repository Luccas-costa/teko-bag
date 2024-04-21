import React from "react";
import Image from "next/image";

import Imagem from "../../../../../public/waves.svg";

export default function Transicao1() {
  return (
    <div
      className='bg-brown1 w-[99.86vw] 2xl:h-[13vh] xl:h-[13vh] md:h-[15vh] sm:h-[17vh] h-[20vh]'
      style={{
        backgroundImage: `url(${Imagem.src})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}
