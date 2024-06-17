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

export default function DashboardFuncoes({
  currentPage,
  totalPages,
  onPageChange,
}: DashboardFuncoesProps) {
  return (
    <div className='h-[40px] w-full border-t border-zinc-700 px-5 flex items-center dash9:text-base dash10:text-sm text-zinc-400 font-semibold justify-between shadow-lg shadow-zinc-900'>
      <div>
        Mostrando {currentPage * 8 - 7} a {Math.min(currentPage * 8, 228)}
      </div>
      <div className='flex mr-2 dash9:space-x-12 dash10:space-x-2'>
        <div>
          {" "}
          Pagina {currentPage} de {totalPages}
        </div>
        <div className='flex space-x-2'>
          <div
            className='dash9_5:w-6 dash9_5:h-6 dash10:w-5 dash10:h-5 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded cursor-pointer'
            onClick={() => onPageChange(1)}
          >
            <CaretDoubleLeft size={20} weight='bold' color='#71717A' />
          </div>
          <div
            className='dash9_5:w-6 dash9_5:h-6 dash10:w-5 dash10:h-5 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded cursor-pointer'
            onClick={() => onPageChange(currentPage - 1)}
          >
            <CaretLeft size={20} weight='bold' color='#71717A' />
          </div>
          <div
            className='dash9_5:w-6 dash9_5:h-6 dash10:w-5 dash10:h-5 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded cursor-pointer'
            onClick={() => onPageChange(currentPage + 1)}
          >
            <CaretRight size={20} weight='bold' color='#71717A' />
          </div>
          <div
            className='dash9_5:w-6 dash9_5:h-6 dash10:w-5 dash10:h-5 bg-zinc-600 flex items-center justify-center shadow-lg border border-zinc-500 rounded cursor-pointer'
            onClick={() => onPageChange(totalPages)}
          >
            <CaretDoubleRight size={20} weight='bold' color='#71717A' />
          </div>
        </div>
      </div>
    </div>
  );
}
