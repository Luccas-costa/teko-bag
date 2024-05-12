import React, { useState } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { AlignJustify } from "lucide-react";
import { motion } from "framer-motion";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

export default function MenuMobile() {
  const [Itmenuopen, setItmenuopen] = useState(false);
  const [divY, setDivY] = useState(-0); // Estado para controlar a posição vertical da div
  const [borda, setBorda] = useState(false);

  const handlemenu = () => {
    setItmenuopen(!Itmenuopen);
  };

  // Função para atualizar a posição vertical da div quando o link "#sobre" for clicado
  const handleSobreClick = () => {
    setDivY(48);
    setBorda(false);
  };

  // Função para atualizar a posição vertical da div quando o link "#footer" for clicado
  const handleFooterClick = () => {
    setDivY(96);
    setBorda(false);
  };

  // Função para voltar a div para sua posição inicial quando o link "home" for clicado
  const handleHomeClick = () => {
    setDivY(-0);
    setBorda(true);
  };

  return (
    <>
      <div className=''>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode='modal'>
            <button className='uppercase bg-green1/50 rounded px-3 py-2 items-center font-bold active:bg-green3 shadow-xl'>
              Login
            </button>
          </SignInButton>
        </SignedOut>
      </div>
      <div className='items-center justify-center'>
        <button
          onClick={handlemenu}
          className='p-1 rounded-lg'
          style={{
            backgroundColor: Itmenuopen ? "#e0b1d1" : "transparent",
          }}
        >
          {Itmenuopen ? (
            <X size={30} weight='bold' />
          ) : (
            <AlignJustify size={30} />
          )}
        </button>
      </div>
      {Itmenuopen && (
        <motion.div
          className='absolute right-0 top-0 mt-[65px] mr-[7px] sm:mt-[65px] sm:mr-[16px] rounded'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='relative'>
            <motion.div
              className={`z-20 w-4 h-4 bg-black absolute right-[14px] top-[-7px] ${
                borda ? "" : "border-t border-l border-white"
              }`}
              style={{ y: divY, rotate: Itmenuopen ? 45 : 0 }}
              whileHover={{ rotate: 45 }}
              animate={{
                y: divY,
                transition: { duration: 0.3 }, // Aumentando a duração da animação de transição
              }}
            ></motion.div>
            <div className='flex flex-col'>
              <a href='#inicio' onClick={handleHomeClick}>
                <motion.div
                  className='z-10 w-[180px] h-[48px] bg-pink2 font-semibold text-lg text-white flex items-center justify-center rounded-t-lg border-b border-l border-white'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  home
                </motion.div>
              </a>
              <a href='#sobre' onClick={handleSobreClick}>
                <motion.div
                  className='z-5 w-[180px] h-[48px] bg-pink2 font-semibold text-lg text-white flex items-center justify-center border-b border-l border-white'
                  initial={{ opacity: 1, y: -48 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 1, y: -48 }}
                  transition={{ duration: 0.5 }}
                >
                  Sobre
                </motion.div>
              </a>
              <a href='#footer' onClick={handleFooterClick}>
                <motion.div
                  className='w-[180px] h-[48px] bg-pink2 font-semibold text-lg text-white flex items-center justify-center rounded-b-lg border-b border-l border-white'
                  initial={{ opacity: 1, y: -96 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 1, y: -96 }}
                  transition={{ duration: 0.6 }}
                >
                  Contato
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
