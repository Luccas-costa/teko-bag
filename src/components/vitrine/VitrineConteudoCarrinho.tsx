import React from 'react'
import { ArrowLeft } from "lucide-react";

interface VitrineConteudoCarrinhoProps {
    onclick: () => void
}

export default function VitrineConteudoCarrinho({onclick}: VitrineConteudoCarrinhoProps) {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center'>
            <button onClick={onclick}>
                <ArrowLeft size={32} />
            </button>
            <div className='text-2xl font-bold'>CARRINHO</div>
        </div>
        <div></div>
    </div>
  )
}
