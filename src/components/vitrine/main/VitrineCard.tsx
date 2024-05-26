import React from "react";
import Image from "next/image";

interface VitrineCardProps {
  produto: string;
  descricao: string;
  preco: string;
  image: string;
  onAddToCart: () => void;
}

export default function VitrineCard({
  produto,
  descricao,
  preco,
  image,
  onAddToCart,
}: VitrineCardProps) {
  return (
    <div className='menuxm3:w-96 w-80 min-h-[28rem] bg-[#3A6591]/30 backdrop-blur-xl overflow-hidden rounded'>
      <div className='flex flex-col items-center p-4 space-y-1'>
        <div className='relative border border-zinc-950 w-full h-[17rem] shadow rounded'>
          <Image
            src={image}
            alt={produto}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className='rounded'
          />
        </div>
        <div className='w-full py-2'>
          <div className='font-semibold text-xl text-center'>{produto}</div>
          <div className='text-base text-center truncate'>{descricao}</div>
        </div>
        <div className='text-lg font-bold text-start w-full'>R$: {preco}</div>
        <button
          className='w-full py-2 rounded border border-black shadow-lg font-semibold active:border-transparent'
          onClick={onAddToCart}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
