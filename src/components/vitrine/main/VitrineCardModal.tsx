import React, { useEffect, useState } from "react";
import Image from "next/image";

interface VitrineCardModalProps {
  produto: string;
  descricao: string;
  preco: string;
  image: string;
  onAddToCart: () => void;
}

const VitrineCardModal: React.FC<VitrineCardModalProps> = ({
  produto,
  descricao,
  preco,
  image,
  onAddToCart,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [buttonText, setButtonText] = useState("Adicionar ao Carrinho");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerHeight < 700);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAddToCart = () => {
    onAddToCart();
    setButtonText("Adicionado");
    setTimeout(() => {
      setButtonText("Adicionar ao Carrinho");
    }, 750);
  };

  return (
    <div className='w-full h-full relative'>
      <div className='flex flex-col items-center p-4 space-y-1 h-full'>
        <div
          className={`relative border border-zinc-950/50 w-full ${
            isSmallScreen ? "h-[25rem]" : "h-[30rem]"
          } shadow rounded flex`}
        >
          <Image
            src={image}
            alt={produto}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className='rounded justify-center items-center'
          />
        </div>
        <div className='w-full 2xl:pt-10 xl:pt-6 lg:pt-4 md:pt-4 pt-3'>
          <div className='font-semibold text-2xl text-center'>{produto}</div>
          <div className='text-xl text-center truncate mb-12'>{descricao}</div>
        </div>
        <div className='text-lg sm:text-xl font-bold text-start w-full absolute bottom-12'>
          R$: {preco}
        </div>
        <button
          className='w-full py-2 rounded border border-black shadow-lg font-semibold active:border-transparent mt-4 absolute bottom-0 mb-1'
          onClick={handleAddToCart}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default VitrineCardModal;
