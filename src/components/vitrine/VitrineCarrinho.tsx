import React from 'react';
import { motion } from 'framer-motion';
import VitrineConteudoCarrinho from "./VitrineConteudoCarrinho";

interface VitrineCarrinhoProps {
  isOpen: boolean;
  handleClose: () => void;
}

const VitrineCarrinho: React.FC<VitrineCarrinhoProps> = ({ isOpen, handleClose }) => {
  return (
    <motion.div
      initial={{ right: '0%' }}
      animate={{ right: isOpen ? ['-100%', '0%'] : '-100%' }}
      exit={{ right: '-100%' }}
      transition={{ type: 'spring', stiffness: 500, damping: 50 }}
      className='fixed top-0 right-0 w-[70vw] 2xl:w-[25vw] xl:w-[30vw] lg:w-[35vw] md:w-[40vw] sm:w-[45vw] menuxm:w-[60vw] h-full bg-green-600 shadow-lg z-50'
      onClick={(e) => e.stopPropagation()} // Previne o clique no próprio menu de fechá-lo
    >
      <div className='p-4 h-full'>
        <VitrineConteudoCarrinho onclick={handleClose} />
      </div>
    </motion.div>
  );
};

export default VitrineCarrinho;
