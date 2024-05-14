import Link from "next/link";
import React from "react";

export default function Aplicativo() {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='text-xl'>Em Produção</div>
      <button className='px-4 py-2 border border-black bg-zinc-300 hover:bg-zinc-500 rounded'>
        <Link href='/'>Voltar a home</Link>
      </button>
    </div>
  );
}
