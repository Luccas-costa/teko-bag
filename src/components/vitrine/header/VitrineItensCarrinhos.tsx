import React, { useState } from "react";
import Image from "next/image";

import { Plus } from "lucide-react";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { useMediaQuery } from "react-responsive";

import {
  addToNewCartbags,
  removeFromNewCartbags,
  updateQuantityInCart,
} from "../../../lib/bags"; // Importando funções necessárias

interface VitrineConteudoCarrinhoProps {
  id: number;
  produtos: string;
  descricao?: string;
  quantidade?: number;
  preco: string;
  onRemove: (id: number) => void;
  handlerPlus: (bag: Omit<Bag, "quantidade">) => void; // Modificado para aceitar um parâmetro
  handlerMinus: (id: number) => void; // Nova propriedade para decrementar a quantidade
}

type Bag = {
  id: number;
  produto: string;
  descricao: string;
  preco: string;
  image: string;
  quantidade: number;
};

export default function VitrineItensCarrinhos({
  id,
  produtos,
  descricao = "", // Valor padrão para descricao
  quantidade = 1, // Valor padrão para quantidade
  preco,
  onRemove,
  handlerPlus,
  handlerMinus,
}: VitrineConteudoCarrinhoProps) {
  const [Quantidade, setQuantidade] = useState(quantidade);

  // Definir as media queries
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  function handlePlus() {
    if (Quantidade < 9) {
      handlerPlus({
        id,
        produto: produtos,
        descricao,
        preco,
        image: "/skeleton.png",
      });
      setQuantidade(Quantidade + 1);
    } else {
      console.log("Quantidade máxima atingida");
    }
  }

  function handleTrash() {
    if (Quantidade > 1) {
      handlerMinus(id);
      setQuantidade(Quantidade - 1);
    } else {
      onRemove(id); // Remove o item do carrinho se a quantidade for 1
    }
  }

  return (
    <div className='w-90% border border-zinc-950 py-2 flex space-x-2 items-center relative shadow-lg'>
      <div className='w-[30%]'>
        <Image
          src='/skeleton.png'
          width={100}
          height={100}
          alt=''
          className='shadow-md border border-zinc-950 ml-4'
        />
      </div>
      <div className='flex flex-col items-end w-[70%] mr-2  pr-2 md:pr-4 '>
        <div className='text-base menuxm2:text-xl font-semibold truncate w-[90%] text-end'>
          {produtos}
        </div>
        <div className='text-sm menuxm2:text-md font-semibold truncate w-[90%] text-end'>
          {descricao}
        </div>
        <div className='text-md menuxm2:text-lg font-bold pr-2 truncate w-[90%] text-end'>
          R$ {preco}
        </div>
      </div>
      <div className='shadow-md absolute right-4 top-[-17px] md:top-[-17px] w-16 h-[1.7rem]  md:w-24 md:h-[1.8rem] bg-vblue border border-zinc-950 flex items-center justify-evenly'>
        <button onClick={handleTrash}>
          <Trash size={isMobile ? 16 : 20} weight='bold' />
        </button>
        <hr className='mx-1 h-[80%] w-[1px] rounded  border-black bg-black rotate-[90] ' />
        <button onClick={handlePlus}>
          <Plus size={isMobile ? 17 : 23} />
        </button>
      </div>
      <div className='shadow rounded-full absolute left-[-16px] top-[-10px] w-[1.2rem] h-[1.2rem] bg-vsand border border-zinc-950 flex items-center justify-center font-semibold'>
        {Quantidade}
      </div>
    </div>
  );
}
