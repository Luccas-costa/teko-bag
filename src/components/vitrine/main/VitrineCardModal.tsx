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
    <div className='w-full h-full relative'>
      <div className='flex flex-col items-center p-4 space-y-1'>
        <div className='relative border border-zinc-950/50 w-full h-[30rem] shadow rounded flex'>
          <Image
            src={image}
            alt={produto}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className='rounded justify-center items-center'
          />
        </div>
        <div className='w-full 2xl:py-10 xl:py-6 lg:py-4 md:py-4 py-3'>
          <div className='font-semibold text-2xl text-center'>{produto}</div>
          <div className='text-xl text-center truncate'>{descricao}</div>
        </div>
        <div className='text-lg sm:text-xl font-bold text-start w-full absolute bottom-12'>
          R$: {preco}
        </div>
        <button
          className='w-full py-2 rounded border border-black shadow-lg font-semibold active:border-transparent mt-4 absolute bottom-0 mb-1'
          onClick={onAddToCart}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
