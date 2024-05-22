import React from "react";
import Image from "next/image";

export default function VitrineCard() {
  return (
    <div className='menuxm3:w-96 w-80 min-h-[28rem] bg-green-600 overflow-hidden'>
      <div className='flex flex-col items-center p-4 space-y-1'>
        <div className='relative border border-zinc-950 bg-red-500 w-full h-[17rem] shadow'>
          <Image
            src='/skeleton.png'
            alt='skeleton'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className='w-full py-2'>
          <div className='font-semibold text-xl text-center'>
            Nome do Produto
          </div>
          <div className='text-base text-center truncate'>
            Descrição do produto
          </div>
        </div>
        <div className='text-lg font-bold text-start w-full'>R$: 00,00</div>
        <button className='w-full py-2 rounded border border-black shadow-lg font-semibold'>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
