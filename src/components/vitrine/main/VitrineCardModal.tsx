import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

interface VitrineCardModalProps {
  produto: string;
  descricao: string;
  preco: string;
  image: string | string[];
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);

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

  useEffect(() => {
    // Check if description is truncated
    const descriptionElement = document.getElementById("descricao");
    if (descriptionElement) {
      setIsTruncated(
        descriptionElement.scrollHeight > descriptionElement.clientHeight
      );
    }
  }, [descricao]);

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

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
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
        <div
          className={`w-full ${
            showFullDescription || !isTruncated ? "mb-12" : "mb-2"
          }`}
        >
          <div className='font-semibold text-2xl text-center'>{produto}</div>
          <div
            id='descricao'
            className='text-xl text-center overflow-hidden'
            style={{ maxHeight: showFullDescription ? "none" : "5.5em" }}
          >
            {descricao}
          </div>
          {isTruncated && (
            <button
              onClick={toggleDescription}
              className='text-blue-500 ml-2 hover:underline focus:outline-none'
            >
              {showFullDescription ? "Ler menos" : "Ler mais"}
            </button>
          )}
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
