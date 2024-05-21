import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Trash } from "@phosphor-icons/react/dist/ssr";

interface VitrineConteudoCarrinhoProps {
  id: number;
  produtos: string;
  descricao?: string;
  preco: string;
  onRemove: (id: number) => void;
}

export default function VitrineItensCarrinhos({
  id,
  produtos,
  descricao,
  preco,
  onRemove,
}: VitrineConteudoCarrinhoProps) {
  const [contador, setcontador] = useState(1);

  function handelplus() {
    if (contador == 9) {
      console.log("carrinho no maximo");
    } else {
      setcontador(contador + 1);
    }
  }

  function handletrash() {
    if (contador > 1) {
      setcontador(contador - 1);
    } else {
      onRemove(id);
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
      <div className='shadow-md absolute right-4 top-[-17px] md:top-[-17px] w-16 h-[1.7rem]  md:w-24 md:h-[1.8rem] bg-green-600 border border-zinc-950 flex items-center justify-evenly'>
        <button onClick={handletrash}>
          <Trash size={20} weight='bold' />
        </button>
        <hr className='mx-1 h-[80%] w-[1px] rounded  border-black bg-black rotate-[90] ' />
        <button onClick={handelplus}>
          <Plus size={23} />
        </button>
      </div>
      <div className='shadow rounded-full absolute left-[-16px] top-[-10px] w-[1.2rem] h-[1.2rem] bg-green-600 border border-zinc-950 flex items-center justify-center font-semibold'>
        {contador}
      </div>
    </div>
  );
}
