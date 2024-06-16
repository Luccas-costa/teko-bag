import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import React from "react";

export default function DashboardFuncoes() {
  return (
    <div className='h-[40px] w-full border-t border-zinc-700 px-5 flex items-center text-zinc-400 font-semibold justify-between shadow-lg shadow-zinc-900'>
      <div>Mostrando 10 de 228 itens</div>
      <div className='flex mr-2 space-x-12'>
        <div> Pagina 1 de 1</div>
        <div className='flex space-x-2'>
          <div className='w-6 h-6 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded'>
            <CaretDoubleLeft size={20} weight='bold' color='#71717A' />
          </div>
          <div className='w-6 h-6 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded'>
            <CaretLeft size={20} weight='bold' color='#71717A' />
          </div>
          <div className='w-6 h-6 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded'>
            <CaretRight size={20} weight='bold' color='#71717A' />
          </div>
          <div className='w-6 h-6 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded'>
            <CaretDoubleRight size={20} weight='bold' color='#71717A' />
          </div>
        </div>
      </div>
    </div>
  );
}
