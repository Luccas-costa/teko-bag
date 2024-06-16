import React from "react";

export default function DashboardCFuncoes() {
  return (
    <div className='h-[40px] w-full border-b border-zinc-700 px-5 flex items-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900'>
      <input
        type='checkbox'
        className='w-4 h-4 appearance-none bg-transparent border border-zinc-700 rounded shadow-lg checked:bg-[#849994] mr-6'
      ></input>
      <div className='mr-40'>Codigo</div>
      <div className='mr-96'>Clientes</div>
      <div className='mr-56'>Data de inscrição</div>
      <div className='mr-40'>Data da Compra</div>
    </div>
  );
}
