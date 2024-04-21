import React from "react";
import Image from "next/image";

import Imagem from "../../../../../public/book.svg";

export default function Transicao2() {
  return (
    <div
      className='bg-yellow1 w-[99.86vw] 2xl:h-[15vh] xl:h-[15vh] md:h-[17vh] sm:h-[17vh] h-[18vh]'
      style={{
        backgroundImage: `url(${Imagem.src})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}
