import React from "react";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div className='flex items-center space-x-4 text-zinc-300 text-xl font-semibold'>
      <div>
        <Image
          src='/logo-dashboard.png'
          width={100}
          height={100}
          alt='logo'
          className='rounded'
        />
      </div>
      <div className='hover:border-b hover:border-zinc-300'>Eventos</div>
      <div className='hover:border-b hover:border-zinc-300'>Clientes</div>
    </div>
  );
}
