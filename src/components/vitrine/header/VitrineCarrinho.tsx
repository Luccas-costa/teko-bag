import React, { useState } from "react";

import { motion } from "framer-motion";

import Imagem from "../../../../public/bglateralmenufinalizar.svg";
import VitrineFinalizar from "./VitrineFinalizar";
import VitrineConteudoCarrinho from "./VitrineConteudoCarrinho";

interface VitrineCarrinhoProps {
  isOpen: boolean;
  handleClose: () => void;
}

const VitrineCarrinho: React.FC<VitrineCarrinhoProps> = ({
  isOpen,
  handleClose,
}) => {
  const [Finalizar, setFinalizar] = useState(false);

  const handlerFinalizar = () => {
    setFinalizar(!Finalizar);
  };
  const handlerCloseFinalizar = () => {
    handleClose();
    setTimeout(() => {
      setFinalizar(!Finalizar);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ right: "0%" }}
      animate={{ right: isOpen ? ["-100%", "0%"] : "-100%" }}
      exit={{ right: "-100%" }}
      transition={{ type: "spring", stiffness: 500, damping: 50 }}
      className='fixed top-0 right-0 h-full z-50 flex '
      onClick={(e) => e.stopPropagation()} // Previne o clique no próprio menu de fechá-lo
    >
      <div
        className='w-full h-full bg-cover  '
        style={{
          backgroundImage: `url(${Imagem.src})`,
        }}
      />
      <div className='bg-[#225485] w-[70vw] 2xl:w-[25vw] xl:w-[30vw] lg:w-[35vw] md:w-[40vw] sm:w-[45vw] menuxm:w-[60vw] h-full '>
        <div className='p-1 h-full'>
          {Finalizar ? (
            <VitrineFinalizar onclick={handlerCloseFinalizar} />
          ) : (
            <VitrineConteudoCarrinho
              onclick={handleClose}
              handlerFinalizar={handlerFinalizar}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default VitrineCarrinho;
