import React from "react";
import Imagem from "../../../../public/wppmato.jpg";

export default function Section1() {
  return (
    <div className='bg-green2 pl-16 pr-16 pb-16 pt-2 z-0'>
      <div
        className='2xl:w-[93vw] 2xl:h-[80vh] xl:h-[90vh] lg:h-[90vh] md:h-[90vh] sm:h-[90vh] h-[90vh] relative'
        style={{
          backgroundImage: `url(${Imagem.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink1 text-3xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-4xl text-center font-bold flex flex-col'>
          Venha conhecer sua TekoBag`s
          <div className='mt-4'>
            <button className='text-sm xl:text-3xl lg:text-2xl md:text-xl sm:text-lg border-2 border-pink1 px-4 py-2 hover:bg-pink1 hover:text-green2'>
              Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
