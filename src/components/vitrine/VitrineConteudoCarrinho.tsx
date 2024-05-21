import React from 'react';
import { ArrowLeft } from "lucide-react";
import VitrineItensCarrinhos from './VitrineItensCarrinhos';

interface VitrineConteudoCarrinhoProps {
    onclick: () => void;
}

export default function VitrineConteudoCarrinho({ onclick }: VitrineConteudoCarrinhoProps) {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center mb-4'>     
        <button onClick={onclick}>
          <ArrowLeft size={32} />
        </button>
        <div className='text-2xl font-bold ml-2'>CARRINHO</div>
      </div>
      <div className='flex-1 overflow-y-auto space-y-5 pl-[0.45rem] pt-[1rem]'>   
        <VitrineItensCarrinhos produtos='bag com es' descricao='teste teste' preco='89,99'/>
        <VitrineItensCarrinhos produtos='bag Rosa Choque' descricao='gasda teste' preco='43,99'/>
        <VitrineItensCarrinhos produtos='bag com estanpa verde' descricao='teste teste' preco='89,99'/>
        <VitrineItensCarrinhos produtos='bag Rosa Choque' descricao='gasda teste' preco='43,99'/>
        <VitrineItensCarrinhos produtos='bag com estanpa verde' descricao='teste teste' preco='89,99'/>
        <VitrineItensCarrinhos produtos='bag Rosa Choque' descricao='gasda teste' preco='43,99'/>
        <VitrineItensCarrinhos produtos='bag com estanpa verde' descricao='teste teste' preco='89,99'/>
        <VitrineItensCarrinhos produtos='bag Rosa Choque' descricao='gasda teste' preco='43,99'/>
      </div>
      <button className='w-full py-2 border border-black hover:bg-blue-600 font-semibold rounded mt-4'>
        Finalizar compra
      </button>
    </div>
  );
}
