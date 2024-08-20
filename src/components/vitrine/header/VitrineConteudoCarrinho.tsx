import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft } from "lucide-react";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import {
  newCartbags,
  removeFromNewCartbags,
  addToNewCartbags,
  updateQuantityInCart,
  clearCart,
} from "../../../lib/bags";
import VitrineItensCarrinhos from "./VitrineItensCarrinhos";
import Link from "next/link";

interface VitrineConteudoCarrinhoProps {
  onclick: () => void;
}

type Bag = {
  id: number;
  produto: string;
  descricao: string;
  preco: string;
  image: string | string[];
  quantidade: number;
};

export default function VitrineConteudoCarrinho({
  onclick,
}: VitrineConteudoCarrinhoProps) {
  const [valor, setValor] = useState("");

  // Atualiza a URL com o valor
  const updateUrlWithValor = useCallback((valor: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("valor", valor);
    window.history.pushState({}, "", url.toString());
  }, []);

  // Atualiza a URL quando o valor mudar
  useEffect(() => {
    if (valor) {
      updateUrlWithValor(valor);
    }
  }, [valor, updateUrlWithValor]);

  // Estado para ver valor
  const [cartbags, setCartbags] = useState([...newCartbags]);

  useEffect(() => {
    setCartbags([...newCartbags]);
  }, []);

  // Calcular o total dos preços
  const total = cartbags.reduce((total, bag) => {
    const preco = parseFloat(bag.preco.replace(",", "."));
    return total + preco * bag.quantidade;
  }, 0);

  const valorFrete = 5.99;
  const totalFinal = total + valorFrete;

  // Atualiza o valor no estado
  useEffect(() => {
    setValor(totalFinal.toFixed(2).replace(".", ","));
  }, [totalFinal]);

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

  const handleClearCart = () => {
    clearCart();
    setItens([...newCartbags]);
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center'>
          <button onClick={onclick}>
            <ArrowLeft size={32} />
          </button>
          <div className='text-2xl font-bold ml-2 text-txtcart'>CARRINHO</div>
        </div>
        <button className='mr-1' onClick={handleClearCart}>
          <Trash size={28} weight='bold' />
        </button>
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
        <Link
          href={`/pages/finalizacao?valor=${encodeURIComponent(valor)}`}
          className='shadow-lg py-2 my-2 w-[95%] border border-black hover:bg-dourado active:bg-dourado font-semibold rounded mt-4 mx-auto text-txtcart text-center'
        >
          Finalizar compra
        </Link>
      )}
    </div>
  );
}
