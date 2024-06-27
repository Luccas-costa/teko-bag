import React, { useState } from "react";
import { motion } from "framer-motion";

import VitrinePagamento from "./VitrinePagamento";
import VitrineFinalizar from "./VitrineFinalizar";
import VitrineConfirmarDados from "./VitrineConfirmarDados";
import VitrineConteudoCarrinho from "./VitrineConteudoCarrinho";
import Imagem from "../../../../public/bglateralmenufinalizar.svg";
import VitrineAgradecimento from "./VitrineAgradecimento";

interface VitrineCarrinhoProps {
  isOpen: boolean;
  handleClose: () => void;
  handleClose2: () => void;
  handlerCloseFinal: () => void;
  Finalizar: boolean;
  setFinalizar: (value: boolean) => void;
  Confirmacao: boolean;
  setConfirmacao: (value: boolean) => void;
  Confirmacao2: boolean;
  setConfirmacao2: (value: boolean) => void;
  Pagamento: boolean;
  setPagamento: (value: boolean) => void;
  handleClose3: () => void;
  handlerCloseAgradecimento: () => void;
  Agradecimento: boolean;
  setAgradecimento: (value: boolean) => void;
}

const VitrineCarrinho: React.FC<VitrineCarrinhoProps> = ({
  isOpen,
  handleClose,
  handleClose2,
  handlerCloseFinal,
  Finalizar,
  setFinalizar,
  Confirmacao,
  setConfirmacao,
  Confirmacao2,
  setConfirmacao2,
  Pagamento,
  setPagamento,
  handleClose3,
  handlerCloseAgradecimento,
  Agradecimento,
  setAgradecimento,
}) => {
  const [desconto, setDesconto] = useState(true);

  const handlerFinalizar = () => {
    setFinalizar(!Finalizar);
  };
  const handlerConfirmacao = () => {
    setConfirmacao(!Confirmacao);
    setConfirmacao2(true);
  };
  const handlerCloseFinalizar = () => {
    handleClose();
    setTimeout(() => {
      if (Confirmacao === false) {
        setFinalizar(!Finalizar);
      }
    }, 1000);
  };

  const handlePagamento = () => {
    setPagamento(true); // quando eu pagar resetar para false
  };

  const handleAgradecimento = () => {
    setAgradecimento(true);
    handlerCloseFinal();
  };

  return (
    <motion.div
      initial={{ right: "0%" }}
      animate={{ right: isOpen ? ["-100%", "0%"] : "-100%" }}
      exit={{ right: "-100%" }}
      transition={{ type: "spring", stiffness: 500, damping: 50 }}
      className='fixed top-0 right-0 h-full z-50 flex'
      onClick={(e) => e.stopPropagation()} // Previne o clique no próprio menu de fechá-lo
    >
      <div
        className='w-[30vw] 2xl:w-[8vw] xl:w-[10vw] lg:w-[10vw] md:w-[15vw] sm:w-[20vw] menuxm:w-[20vw] h-full bg-cover flex'
        style={{
          backgroundImage: `url(${Imagem.src})`,
          position: `relative`,
          left: `1px`,
        }}
        onClick={handleClose}
      ></div>
      <div className='bg-vitrinegreen w-[70vw] 2xl:w-[25vw] xl:w-[30vw] lg:w-[35vw] md:w-[40vw] sm:w-[45vw] menuxm:w-[60vw] h-full'>
        <div className='p-1 h-full relative right-[2vw]'>
          {Finalizar ? (
            Confirmacao ? (
              Pagamento ? (
                Agradecimento ? (
                  <VitrineAgradecimento
                    onclick={handleClose3}
                    handlerCloseAgradecimento={handlerCloseAgradecimento}
                  />
                ) : (
                  <VitrinePagamento
                    onclick={handleClose2}
                    handlerCloseFinal={handleAgradecimento}
                  />
                )
              ) : (
                <VitrineFinalizar
                  onclick={handleClose2}
                  desconto={desconto}
                  onclick2={handlePagamento}
                />
              )
            ) : Confirmacao2 ? (
              <> {handlerConfirmacao()} </>
            ) : (
              <VitrineConfirmarDados
                onclick={handleClose2}
                onclick2={handlerConfirmacao}
                setDesconto={setDesconto}
              />
            )
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
