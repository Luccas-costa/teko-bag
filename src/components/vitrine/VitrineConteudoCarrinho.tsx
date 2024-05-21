import React, { useState } from "react";

import { ArrowLeft } from "lucide-react";

import { Cartbags } from "../../lib/bags";
import VitrineItensCarrinhos from "./VitrineItensCarrinhos";

interface VitrineConteudoCarrinhoProps {
  onclick: () => void;
  handlerFinalizar: () => void;
}

export default function VitrineConteudoCarrinho({
  onclick,
  handlerFinalizar,
}: VitrineConteudoCarrinhoProps) {
  const [itens, setItens] = useState(Cartbags);

  const handleRemoveItem = (id: number) => {
    setItens(itens.filter((item) => item.id !== id));
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center mb-4'>
        <button onClick={onclick}>
          <ArrowLeft size={32} />
        </button>
        <div className='text-2xl font-bold ml-2'>CARRINHO</div>
      </div>
      <div className='flex-1 overflow-y-auto space-y-5 pl-[0.45rem] pt-[1rem] pr-[0.2rem]'>
        {itens.map((item) => (
          <VitrineItensCarrinhos
            key={item.id}
            id={item.id}
            produtos={item.produto}
            descricao={item.descricao}
            preco={item.preco}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>
      <button
        onClick={handlerFinalizar}
        className='shadow-lg w-full py-2 border border-black hover:bg-blue-600 font-semibold rounded mt-4'
      >
        Finalizar compra
      </button>
    </div>
  );
}
