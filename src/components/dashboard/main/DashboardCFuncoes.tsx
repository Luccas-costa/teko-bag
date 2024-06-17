import React from "react";

export default function DashboardCFuncoes() {
  return (
    <div className='h-[40px] w-full border-b border-zinc-700 px-5 flex items-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900'>
      <input
        type='checkbox'
        className='w-4 h-4 appearance-none bg-transparent border border-zinc-700 rounded shadow-lg checked:bg-[#849994] mr-9'
      ></input>
      <div className='dash3:w-[9.6rem] dash4:w-[6.7rem] dash5:w-[5.7rem] dash6:w-[4.7rem] dash6:text-base dash7:w-[4.7rem] dash7:text-sm'>Codigo</div>
      <div className='dash1:w-[28rem] dash2:w-[19rem] dash3:w-[15rem] dash4:w-[14rem] dash5:w-[13rem] dash6:w-[12rem] dash6:text-base dash7:w-[10.5rem] dash7:text-sm'>Clientes</div>
      <div className='dash1:w-[22.4rem] dash2:w-[18rem] dash3:w-[15rem] dash4:w-[14rem] dash5:w-[13rem] dash6:w-[10rem] dash6:text-base dash7:w-[8rem] dash7:text-sm'>Data de inscrição</div>
      <div className='dash6:text-base dash7:text-sm'>Data da Compra</div>
    </div>
  );
}
