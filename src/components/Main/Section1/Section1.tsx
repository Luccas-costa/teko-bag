import React from "react";
import Image from "next/image";

export default function Section1() {
  return (
    <div className='bg-green2 pl-16 pr-16 pb-16 pt-2 z-0'>
      <div className='w-full h-full relative'>
        <Image
          src='/wppmato.jpg'
          alt='folhas'
          width={1800}
          height={10}
          className='rounded-lg'
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink1 text-xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-3xl text-center font-bold flex flex-col'>
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
