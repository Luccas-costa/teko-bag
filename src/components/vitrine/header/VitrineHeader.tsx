"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Tote } from "@phosphor-icons/react/dist/ssr";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { AnimatePresence } from "framer-motion";

import { insertBD } from "@/utils/insertBD";
import { Dados } from "@/lib/confirmarDados";
import VitrineCarrinho from "./VitrineCarrinho";
import { useFirstName } from "@/hooks/useFirstName";
import { useUserEmail } from "@/hooks/useUserEmail";
import { sendEmailCompra } from "@/utils/sendEmailCompra";
import { clearCart, newCartbags } from "../../../lib/bags";
import { getFormattedDate } from "@/utils/diaAtual";
import { sendEmailCompraCliente } from "@/utils/sendEmailCompraCliente";

interface VitrineHeaderProps {
  notificationCart: number;
}

const VitrineHeader: React.FC<VitrineHeaderProps> = ({
  notificationCart,
}: VitrineHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [Finalizar, setFinalizar] = useState(false);
  const [Confirmacao, setConfirmacao] = useState(false);
  const [Confirmacao2, setConfirmacao2] = useState(false);
  const [Pagamento, setPagamento] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const firstName = useFirstName();

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

  const idAleatorio = () => {
    const id = Math.floor(10000 + Math.random() * 90000);
    return id.toString();
  };

  const datacompra = getFormattedDate();

  const handleFinal = async () => {
    const id = idAleatorio();
    const itens = newCartbags.map((bag) => bag.produto).join(", ");
    const quantidade = newCartbags
      .map((bag) => bag.quantidade)
      .join(", ")
      .toString();

    console.log({
      id: id,
      email: Dados[0].email,
      instagram: Dados[0].instagram,
      bairro: Dados[0].bairro,
      rua: Dados[0].rua,
      complemento: Dados[0].complemento,
      nurmo: Dados[0].numero,
      cep: Dados[0].cep,
      cidade: Dados[0].cidade,
      itens: itens,
      quantidade: quantidade,
    });

    await insertBD({
      id: id,
      email: Dados[0].email,
      instagram: Dados[0].instagram,
      bairro: Dados[0].bairro,
      rua: Dados[0].rua,
      complemento: Dados[0].complemento,
      nurmo: Dados[0].numero,
      cep: Dados[0].cep,
      cidade: Dados[0].cidade,
      itens: itens,
      quantidade: quantidade,
      datacompra: datacompra,
    });

    // Chamar a função de envio de email
    await sendEmailCompra({
      subtitulo: "Teko Bag",
      email: Dados[0].email,
      instagram: Dados[0].instagram,
      nome: `${firstName}`, // nome vindo do clerk
    });

    await sendEmailCompraCliente({
      subtitulo: "Teko Bag",
      email: Dados[0].email,
      instagram: Dados[0].instagram,
      nome: `${firstName}`, // nome vindo do clerk
    });

    // Limpar carrinho após salvar os dados
    clearCart();

    // Fechar modais e limpar estados de confirmação
    setIsOpen(false);
    setIsOpen2(false);
    setFinalizar(false);
    setConfirmacao(false);
    setConfirmacao2(false);
    setPagamento(false);
    // Tratar erros, se necessário
  };

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
          <li
            onClick={handleClick}
            className='relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Tote size={28} weight={isOpen || isHovered ? "fill" : "regular"} />
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
              handlerCloseFinal={handleFinal}
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
};

export default VitrineHeader;
