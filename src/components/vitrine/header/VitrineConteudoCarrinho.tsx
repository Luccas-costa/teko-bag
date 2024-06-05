import React, { useState, useEffect } from "react";

import { ArrowLeft } from "lucide-react";

import {
  newCartbags,
  removeFromNewCartbags,
  addToNewCartbags,
  updateQuantityInCart,
} from "../../../lib/bags";
import VitrineItensCarrinhos from "./VitrineItensCarrinhos";

interface VitrineConteudoCarrinhoProps {
  onclick: () => void;
  handlerFinalizar: () => void;
}

type Bag = {
  id: number;
  produto: string;
  descricao: string;
  preco: string;
  image: string;
  quantidade: number;
};

export default function VitrineConteudoCarrinho({
  onclick,
  handlerFinalizar,
}: VitrineConteudoCarrinhoProps) {
  const [itens, setItens] = useState([...newCartbags]);

  useEffect(() => {
    setItens([...newCartbags]);
  }, []);

  const handleRemoveItem = (id: number) => {
    removeFromNewCartbags(id);
    setItens([...newCartbags]);
  };

  const handlerPlus = (bag: Omit<Bag, "quantidade">) => {
    addToNewCartbags(bag);
    setItens([...newCartbags]);
  };

  const handlerMinus = (id: number) => {
    const item = newCartbags.find((bag) => bag.id === id);
    if (item && item.quantidade > 1) {
      updateQuantityInCart(id, item.quantidade - 1);
    } else {
      removeFromNewCartbags(id);
    }
    setItens([...newCartbags]);
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center mb-4'>
        <button onClick={onclick}>
          <ArrowLeft size={32} />
        </button>
        <div className='text-2xl font-bold ml-2 text-txtcart'>CARRINHO</div>
      </div>
      <div className='flex-1 overflow-y-auto space-y-5 pl-[0.45rem] pt-[1rem] pr-[0.2rem]'>
        {itens.length > 0 ? (
          itens.map((item) => (
            <VitrineItensCarrinhos
              key={item.id}
              id={item.id}
              produtos={item.produto}
              descricao={item.descricao}
              quantidade={item.quantidade}
              preco={item.preco}
              imagem={item.image}
              onRemove={handleRemoveItem}
              handlerPlus={handlerPlus}
              handlerMinus={handlerMinus}
            />
          ))
        ) : (
          <div className='text-center text-xl font-semibold mt-10 flex flex-col text-txtcart'>
            Não há itens no carrinho
            <button
              onClick={onclick}
              className='mt-4 py-2 px-4 border border-black hover:bg-dourado active:bg-dourado font-semibold rounded text-txtcart'
            >
              Sair Carrinho
            </button>
          </div>
        )}
      </div>
      {itens.length > 0 && (
        <button
          onClick={handlerFinalizar}
          className='shadow-lg py-2 my-2 w-[90%] border border-black hover:bg-dourado active:bg-dourado font-semibold rounded mt-4 mx-auto text-txtcart'
        >
          Finalizar compra
        </button>
      )}
    </div>
  );
}
