import React, { useState, useEffect } from "react";

import { ArrowLeft } from "lucide-react";
import { Trash } from "@phosphor-icons/react/dist/ssr";

import {
  newCartbags,
  removeFromNewCartbags,
  updateQuantityInCart,
} from "../../../lib/bags";
import VitrineDivisoriaFinalizar from "./VitrineDivisoriaFinalizar";

interface VitrineFinalizarProps {
  onclick: () => void;
}

export default function VitrineFinalizar({ onclick }: VitrineFinalizarProps) {
  // Estado para armazenar os itens do carrinho
  const [cartbags, setCartbags] = useState([...newCartbags]);

  useEffect(() => {
    setCartbags([...newCartbags]);
  }, []);

  // Handler para remover ou diminuir a quantidade de um item do carrinho
  const handlerTrash = (id: number) => {
    const item = newCartbags.find((bag) => bag.id === id);
    if (item) {
      if (item.quantidade > 1) {
        updateQuantityInCart(id, item.quantidade - 1);
      } else {
        removeFromNewCartbags(id);
      }
      setCartbags([...newCartbags]);
    }
  };

  // Calcular o total dos preços
  const total = cartbags.reduce((total, bag) => {
    const preco = parseFloat(bag.preco.replace(",", "."));
    return total + preco * bag.quantidade;
  }, 0);

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center mb-4'>
        <button onClick={onclick}>
          <ArrowLeft size={32} />
        </button>
        <div className='text-2xl font-bold ml-2'>Finalização</div>
      </div>
      {cartbags.length === 0 ? (
        <div className='text-center mt-6'>
          <div className='font-semibold'>Não há itens em seu carrinho</div>
          <button
            onClick={onclick}
            className='mt-4 py-2 px-4 border border-black hover:bg-blue-600 font-semibold rounded'
          >
            Sair Finalização
          </button>
        </div>
      ) : (
        <>
          <div className='flex-1 overflow-y-auto space-y-2 mt-2'>
            <span className='font-semibold'>Itens:</span>
            <VitrineDivisoriaFinalizar />
            {cartbags.map((bag) => {
              const precoUnitario = parseFloat(bag.preco.replace(",", "."));
              const precoTotal = (precoUnitario * bag.quantidade)
                .toFixed(2)
                .replace(".", ",");

              return (
                <div key={bag.id} className='text-end p-2 relative'>
                  <div className='mb-2'>
                    <div className='absolute top-[17%] left-1'>
                      <button onClick={() => handlerTrash(bag.id)}>
                        <Trash size={25} weight='regular' />
                      </button>
                    </div>
                    <div className='font-semibold truncate'>{bag.produto}</div>
                    <div className='font-bold'>
                      {bag.quantidade}x | R$: {precoTotal}
                    </div>
                  </div>
                  <VitrineDivisoriaFinalizar />
                </div>
              );
            })}
          </div>
          <div className='text-end'>
            <div className='font-bold'>Total: R$ {total.toFixed(2)}</div>
          </div>
          <button
            // onClick={FinalizarPedido}
            className='w-full py-2 border border-black hover:bg-blue-600 font-semibold rounded mt-4'
          >
            Finalizar pedido
          </button>
        </>
      )}
    </div>
  );
}
