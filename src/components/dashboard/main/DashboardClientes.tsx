import React from "react";
import { DotsThree } from "@phosphor-icons/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

// Extende o Day.js com o plugin relativeTime e define o locale
dayjs.extend(relativeTime);
dayjs.locale('pt-br');

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
    <div className='h-[80px] w-full border-y border-zinc-700 px-5 flex items-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900 relative'>
      <input
        type='checkbox'
        className='w-4 h-4 appearance-none bg-transparent border border-zinc-700 rounded shadow-lg checked:bg-[#849994] mr-8'
      ></input>
      <div className='dash3:w-[10rem] dash4:w-[7rem] dash5:w-[6rem] dash6:w-[5rem] dash6:text-base dash7:w-[5rem] dash7:text-sm text-zinc-400'>{id}</div>
      <div className='dash1:w-[28rem] dash2:w-[19rem] dash3:w-[15rem] dash4:w-[14rem] dash5:w-[13rem] dash6:w-[12rem] dash6:text-base dash7:w-[10.5rem] dash7:text-sm flex flex-col'>
        <div>{nome}</div>
        <div className="text-zinc-500">{email}</div>
      </div>
      <div className='dash1:w-[22.4rem] dash2:w-[18rem] dash3:w-[15rem] dash4:w-[14rem] dash5:w-[13rem] dash6:w-[10rem] dash6:text-base dash7:w-[8rem] dash7:text-sm text-zinc-400'>
       {relativeEntrada} atrás
      </div>
      <div className='dash6:text-base dash7:text-sm text-zinc-400'>
       {relativeCompra} atrás
      </div>
      <button className="w-8 h-8 border absolute right-5 border-zinc-700 rounded-lg flex items-center justify-center">
        <DotsThree size={25} weight="bold" />
      </button>
    </div>
  );
}
