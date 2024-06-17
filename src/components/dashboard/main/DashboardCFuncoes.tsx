import React from "react";

export default function DashboardCFuncoes() {
  return (
    <div className='h-[40px] w-full border-b border-zinc-700 dash8:px-5 dash9:px-2 dash10:px-2 flex items-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900'>
      <input
        type='checkbox'
        className='w-4 h-4 appearance-none bg-transparent border border-zinc-700 rounded shadow-lg checked:bg-[#849994] dash7:mr-8 dash8:mr-4 dash9:mr-2 dash10:mr-1'
      ></input>
      <div className='dash3:w-[9.6rem] dash4:w-[6.7rem] dash5:w-[5.7rem] dash6:w-[4.7rem] dash6:text-base dash7:w-[4.7rem] dash7:text-sm dash8:w-[4.9rem] dash9:text-xs dash10:text-[11px] dash9:w-[4rem] dash10:w-[3rem] '>Codigo</div> 
      <div className='dash1:w-[28rem] dash2:w-[19rem] dash3:w-[15rem] dash4:w-[14rem] dash5:w-[13rem] dash6:w-[12rem] dash6:text-base dash7:w-[10.5rem] dash7:text-sm dash8:w-[9rem] dash9:text-xs dash10:text-[11px] dash9:w-[8.5rem] dash10:w-[7.6rem]'>Clientes</div>
      <div className='dash1:w-[22.4rem] dash2:w-[18rem] dash3:w-[15rem] dash4:w-[14rem] dash5:w-[13rem] dash6:w-[10rem] dash6:text-base dash7:w-[8rem] dash7:text-sm dash8:w-[7.5rem] dash8:text-[13px] dash9:text-xs dash10:text-[11px] dash9:w-[7.5rem]'>Data de inscrição</div>
      <div className='dash6:text-base dash7:text-sm dash8:text-[13px] dash9:text-xs dash10:text-[11px]'>Data da Compra</div>
    </div>
  );
}
