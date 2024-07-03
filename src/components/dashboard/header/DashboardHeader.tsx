import React from "react";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div className='flex items-center justify-center space-x-4 text-zinc-300 text-xl font-semibold border-b mb-2 ml-3'>
      <div>
        <Image
          src='/favicon.ico'
          width={100}
          height={100}
          alt='logo'
          className='rounded mb-3'
        />
      </div>
    </div>
  );
}
