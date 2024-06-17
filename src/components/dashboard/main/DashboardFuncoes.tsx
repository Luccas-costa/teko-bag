import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import React from "react";

interface DashboardFuncoesProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function DashboardFuncoes({ currentPage, totalPages, onPageChange }: DashboardFuncoesProps) {
  return (
    <div className='h-[40px] w-full border-t border-zinc-700 px-5 flex items-center text-zinc-400 font-semibold justify-between shadow-lg shadow-zinc-900'>
      <div>Mostrando {currentPage * 8 - 7} a {Math.min(currentPage * 8, 228)}</div>
      <div className='flex mr-2 space-x-12'>
        <div> Pagina {currentPage} de {totalPages}</div>
        <div className='flex space-x-2'>
          <div
            className='w-6 h-6 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded cursor-pointer'
            onClick={() => onPageChange(1)}
          >
            <CaretDoubleLeft size={20} weight='bold' color='#71717A' />
          </div>
          <div
            className='w-6 h-6 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded cursor-pointer'
            onClick={() => onPageChange(currentPage - 1)}
          >
            <CaretLeft size={20} weight='bold' color='#71717A' />
          </div>
          <div
            className='w-6 h-6 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded cursor-pointer'
            onClick={() => onPageChange(currentPage + 1)}
          >
            <CaretRight size={20} weight='bold' color='#71717A' />
          </div>
          <div
            className='w-6 h-6 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded cursor-pointer'
            onClick={() => onPageChange(totalPages)}
          >
            <CaretDoubleRight size={20} weight='bold' color='#71717A' />
          </div>
        </div>
      </div>
    </div>
  );
}
