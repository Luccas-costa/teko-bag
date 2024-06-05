"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Tote } from "@phosphor-icons/react/dist/ssr";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { AnimatePresence } from "framer-motion";

import VitrineCarrinho from "./VitrineCarrinho";
import { useFirstName } from "@/hooks/useFirstName";

interface VitrineHeaderProps {
  notificationCart: number;
}

export default function VitrineHeader({
  notificationCart,
}: VitrineHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [Finalizar, setFinalizar] = useState(false);
  const [Confirmacao, setConfirmacao] = useState(false);
  const [Confirmacao2, setConfirmacao2] = useState(false);
  const [Pagamento, setPagamento] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClose2 = () => {
    setIsOpen2(false);
    setFinalizar(false);
    setConfirmacao(false);
  };

  const firstName = useFirstName();

  return (
    <header className='w-full py-3 flex justify-between items-center px-2 space-x-2 mb-2 bg-transparent'>
      <div className='rounded-xl 2xl:w-[88%] lg:w-[82%] md2:w-[80%] sm1:w-[72%] xm1:w-[70%] xm2:w-[65%] sm2:w-[65%] xm6:w-[62%] w-[57%] bg-white/15 xm5:py-[0.6rem] xm6:py-[0.6rem] xm7:py-[0.75rem] py-[0.9rem] px-3 shadow-lg'>
        <ul className='font-semibold text-base xm6:text-lg sm2:text-lg xm3:text-lg xm1:text-xl text-white flex justify-between'>
          <li className='md:pl-4'>
            {firstName ? `Bem-vindo, ${firstName}` : "Carregando..."}
          </li>
        </ul>
      </div>
      <div className='rounded-xl 2xl:w-[12%] lg:w-[18%] md2:w-[20%] sm1:w-[28%] xm1:w-[30%] xm2:w-[35%] sm2:w-[35%] xm6:w-[38%] w-[43%] bg-white/15 py-1 px-3 shadow-lg'>
        <ul className='flex justify-between items-center'>
          <li>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
          <li onClick={handleClick} className='relative'>
            <Tote size={28} weight={isOpen ? "fill" : "regular"} />
            {notificationCart > 0 && (
              <div className='absolute top-[-3px] right-[-7px] w-4 h-4 rounded-full bg-red-500 font-extrabold text-sm flex justify-center items-center'>
                {notificationCart > 0 && notificationCart < 9
                  ? notificationCart
                  : notificationCart == 9
                  ? 9
                  : notificationCart > 9
                  ? 9
                  : null}
              </div>
            )}
          </li>
          <li>
            <Image
              src='/logo-transparente.png'
              width={40}
              height={40}
              alt='logo'
            />
          </li>
        </ul>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div
            className='fixed inset-0 z-40 flex'
            onClick={Finalizar ? handleClose2 : handleClose}
          >
            <VitrineCarrinho
              isOpen={isOpen}
              handleClose={handleClose}
              handleClose2={handleClose2}
              Finalizar={Finalizar}
              setFinalizar={setFinalizar}
              Confirmacao={Confirmacao}
              setConfirmacao={setConfirmacao}
              Confirmacao2={Confirmacao2}
              setConfirmacao2={setConfirmacao2}
              Pagamento={Pagamento}
              setPagamento={setPagamento}
            />
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
