import React, { useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

interface VitrineCardProps {
  produto: string;
  descricao: string;
  preco: string;
  image: string | string[];
  onAddToCart: () => void;
  onCardClick: () => void;
}

export default function VitrineCard({
  produto,
  descricao,
  preco,
  image,
  onAddToCart,
  onCardClick,
}: VitrineCardProps) {
  const [buttonText, setButtonText] = useState("Adicionar ao Carrinho");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddToCart = () => {
    onAddToCart();
    setButtonText("Adicionado");
    setTimeout(() => {
      setButtonText("Adicionar ao Carrinho");
    }, 750);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const images = Array.isArray(image) ? image : [image];

  return (
    <div
      className='menuxm3:w-96 w-80 min-h-[28rem] bg-[#fff]/30 xl:bg-zinc-200/30 backdrop-blur-xl overflow-hidden rounded cursor-pointer'
      onClick={onCardClick}
    >
      <div className='flex flex-col items-center p-4 space-y-1'>
        <div className='relative border border-zinc-950/50 w-full h-[17rem] shadow rounded flex'>
          <Image
            src={images[currentIndex]}
            alt={produto}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className='rounded justify-center items-center'
          />
          {Array.isArray(image) && image.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full p-2'
              >
                <CaretLeft className='w-6 h-6 text-black' />
              </button>
              <button
                onClick={handleNextImage}
                className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full p-2'
              >
                <CaretRight className='w-6 h-6 text-black' />
              </button>
            </>
          )}
        </div>
        <div className='w-full py-2'>
          <div className='font-semibold text-xl text-center'>{produto}</div>
          <div className='text-base text-center truncate'>{descricao}</div>
        </div>
        <div className='text-lg font-bold text-start w-full'>R$: {preco}</div>
        <button
          className='w-full py-2 rounded border border-black shadow-lg font-semibold active:border-transparent'
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
