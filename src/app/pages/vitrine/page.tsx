import React from "react";

import VitrineHeader from "@/components/vitrine/VitrineHeader";
import VitrineMain from "@/components/vitrine/VitrineMain";
import VitrineFooter from "@/components/vitrine/VitrineFooter";

export default function Vitrine() {
  return (
    <div className='w-full h-full bg-zinc-700 flex flex-col'>
      <VitrineHeader />
      <div className='flex w-full px-4 '>
        <hr className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[43%] border-zinc-950/30 ' />
        <hr className='2xl:w-[1.2%] xl:w-[1.5%] lg:w-[1.5%] md:w-[2%] sm:w-[3%] w-[4%] -rotate-[60deg] 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 ml-1 border-zinc-950/30 ' />
        <hr className='2xl:w-[1.2%] xl:w-[1.5%] lg:w-[1.5%] md:w-[2%] sm:w-[3%] w-[4%] -rotate-[60deg] 2xl:ml-0 xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0 mr-1 border-zinc-950/30 ' />
        <hr className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[43%]  border-zinc-950/30 ' />
      </div>
      <VitrineMain />
      <VitrineFooter />
    </div>
  );
}
