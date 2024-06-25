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
  onclick2: () => void;
  desconto: boolean;
}

export default function VitrineFinalizar({
  onclick,
  onclick2,
  desconto,
}: VitrineFinalizarProps) {
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

  // Calcular o valor do desconto
  const valorFrete = 5.99
  const valorDesconto = desconto ? total * 0 : 0; // aqui no *0 eu escolho o quanto quero por de desconto e so por tipo 15% = 0.15
  const totalComDesconto = total - valorDesconto;
  const totalFinal = totalComDesconto + valorFrete;

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
            className='mt-4 py-2 px-4 border border-black hover:bg-dourado font-semibold rounded'
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
            {desconto == false || desconto == null || desconto == undefined ? (
              <div className='font-bold text-base'>Frete: R$ 5,99</div>
            ) : (
              <div className='font-bold text-base relative line-through'>
                Frete: R$ 5,99
              </div>
            )}

            {/* {desconto && (
              <div className='font-bold text-base text-red-600'>
                Desconto: -R$ {valorDesconto.toFixed(2).replace(".", ",")}
              </div>
            )} */}
            <div className='font-bold '>
              Total: R$ {desconto ? totalComDesconto.toFixed(2).replace(".", ",") : totalFinal.toFixed(2).replace(".", ",")}
            </div>
          </div>
          <button
            className='w-full py-2 mb-2 border border-black hover:bg-dourado font-semibold rounded mt-2'
            onClick={onclick2}
          >
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
}
