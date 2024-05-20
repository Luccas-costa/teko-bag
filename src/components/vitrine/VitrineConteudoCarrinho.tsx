import React from 'react'
import { ArrowLeft } from "lucide-react";
import VitrineItensCarrinhos from './VitrineItensCarrinhos'

interface VitrineConteudoCarrinhoProps {
    onclick: () => void
}

export default function VitrineConteudoCarrinho({onclick}: VitrineConteudoCarrinhoProps) {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center mb-4'> 
            <button onClick={onclick}>
                <ArrowLeft size={32} />
            </button>
            <div className='text-2xl font-bold'>CARRINHO</div>
        </div>
        <div className='my-8'>
          <VitrineItensCarrinhos />
        </div>
        <button className='w-90% py-2 border relative top-0 border-black hover:bg-blue-600 font-semibold rounded '>
          Finalizar compra
        </button>
    </div>

  )
}
