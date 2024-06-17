import React from "react";
import { DotsThree } from "@phosphor-icons/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

// Extende o Day.js com o plugin relativeTime e define o locale
dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface DashboardClientesProps {
  id: string;
  nome: string;
  email: string;
  dataEntrada: string;
  dataCompra: string;
}

export default function DashboardClientes({
  id,
  nome,
  email,
  dataEntrada,
  dataCompra,
}: DashboardClientesProps) {
  const format = "DD/MM/YYYY";
  const entradaDate = dayjs(dataEntrada, format);
  const compraDate = dayjs(dataCompra, format);

  const relativeEntrada = entradaDate.toNow(true);
  const relativeCompra = compraDate.toNow(true);

  return (
    <div className='h-[80px] w-full border-y border-zinc-700 dash8:px-5 dash8_5:px-2 dash9:px-2 dash10:px-2 flex items-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900 relative'>
      <input
        type='checkbox'
        className='w-4 h-4 appearance-none bg-transparent border border-zinc-700 rounded shadow-lg checked:bg-[#849994] dash7:mr-8 dash8:mr-4 dash8_5:mr-3 dash9:mr-2 dash10:mr-1'
      ></input>
      <div className='dash3:w-[10rem] dash4:w-[7rem] dash5:w-[6rem] dash6:w-[5rem] dash6:text-base dash7:w-[5rem] dash8:w-[5rem] dash8_5:w-[3.8rem] dash7:text-sm dash9:text-xs dash10:text-[11px] dash9:w-[4rem] dash10:w-[3rem] text-zinc-400'>
        {id}
      </div>
      <div className='dash1:w-[28rem] dash2:w-[19rem] dash3:w-[15rem] dash4:w-[14rem] dash5:w-[13rem] dash6:w-[12rem] dash6:text-base dash7:w-[10.5rem] dash7:text-sm dash8:w-[9rem] dash8_5:w-[9rem] dash9:text-xs dash10:text-[11px] dash9:w-[8.5rem] dash9_5:w-[8rem] dash10:w-[7.6rem] flex flex-col truncate overflow-hidden'>
        <div>{nome}</div>
        <div className='text-zinc-500 dash7:text-sm dash8:text-xs'>{email}</div>
      </div>
      <div className='dash1:w-[22.4rem] dash2:w-[18rem] dash3:w-[15rem] dash4:w-[14rem] dash5:w-[13rem] dash6:w-[10rem] dash6:text-base dash7:w-[8rem] dash7:text-sm dash8:w-[7.5rem] dash9:w-[7.5rem] dash9_5:w-[6.5rem] dash9:text-xs dash10:text-[11px] dash10:w-[5rem] text-zinc-400'>
        {relativeEntrada} atrás
      </div>
      <div className='dash6:text-base dash7:text-sm dash9:text-xs dash10:text-[11px] text-zinc-400'>
        {relativeCompra} atrás
      </div>
      <button className='dash9_5:w-8 dash9_5:h-8 dash10:w-6 dash10:h-6 border absolute dash7:right-5 dash8:right-[0.6rem] dash9:right-2 dash10:right-2 border-zinc-700 dash9_5:rounded-lg dash10:rounded-md flex items-center justify-center z-1 bg-zinc-900'>
        <DotsThree size={25} weight='bold' />
      </button>
    </div>
  );
}
