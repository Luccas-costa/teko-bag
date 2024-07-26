import React from "react";

interface DashboardCFuncoesProps {
  isChecked: boolean;
  onCheckboxChange: () => void;
}

export default function DashboardCFuncoes({
  isChecked,
  onCheckboxChange,
}: DashboardCFuncoesProps) {
  return (
    <div className='h-[40px] w-full border-b border-zinc-700 dash8:px-5 dash9:px-2 dash10:px-2 dash10_5:px-2 flex items-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={onCheckboxChange}
        className='w-4 h-4 appearance-none bg-transparent border border-zinc-700 rounded shadow-lg checked:bg-[#849994] dash7:mr-8 dash8:mr-4 dash9:mr-2 dash10:mr-1 dash10_5:mr-1'
      />
      <div className='dash3:w-[9.6rem] dash4:w-[6.7rem] dash5:w-[5.7rem] dash6:w-[4.7rem] dash6:text-base dash7:w-[4.7rem] dash7:text-sm dash8:w-[4.9rem] dash9:text-xs dash10:text-[11px] dash10_5:text-[11px] dash9:w-[4rem] dash10:w-[3rem] dash10_5:w-[3rem] '>
        Codigo
      </div>
      <div className='dash1:w-[28rem] dash2:w-[28rem] dash3:w-[25rem] dash4:w-[23rem] dash5:w-[20rem] dash6:w-[18rem] dash6:text-base dash7:w-[15rem] dash7:text-sm dash8:w-[13.5rem] dash8_5:w-[12.5rem] dash9:text-xs dash9_5:w-[11.5rem]  dash10:text-[11px] dash10_5:text-[11px] dash9:w-[11.5rem] dash10:w-[9.5rem] dash10_5:w-[7.5rem]'>
        Clientes
      </div>
      <div className='dash6:text-base dash7:text-sm dash8:text-[13px] dash9:text-xs dash10:text-[11px] dash10_5:text-[10px]'>
        Data da Compra
      </div>
    </div>
  );
}
