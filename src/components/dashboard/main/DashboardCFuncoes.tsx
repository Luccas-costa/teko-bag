import React from "react";

export default function DashboardCFuncoes() {
  return (
    <div className='h-[40px] w-full border-b border-zinc-700 px-5 flex items-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900'>
      <input
        type='checkbox'
        className='w-4 h-4 appearance-none bg-transparent border border-zinc-700 rounded shadow-lg checked:bg-[#849994] mr-9'
      ></input>
      <div className='w-[9.6rem]'>Codigo</div>
      <div className='w-[28rem]'>Clientes</div>
      <div className='w-[22.4rem]'>Data de inscrição</div>
      <div className=''>Data da Compra</div>
    </div>
  );
}
