import React from "react";

interface VitrineDivisoriaMainProps {
  texto: string;
  cor: string;
}

export default function VitrineDivisoriaMain({
  texto,
  cor,
}: VitrineDivisoriaMainProps) {
  return (
    <div className='flex w-full px-2 justify-center items-center'>
      <hr
        className={`2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[43%] ml-auto`}
        style={{ backgroundColor: `${cor}99`, borderColor: `${cor}99` }} // 99 é o equivalente hexadecimal para 60% de opacidade
      />

      <hr
        className={`2xl:w-[1.2%] xl:w-[1.5%] lg:w-[1.5%] md:w-[2%] sm:w-[3%] w-[4%] -rotate-[60deg] 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 ml-1`}
        style={{ backgroundColor: `${cor}99`, borderColor: `${cor}99` }}
      />
      <div className='text-2xl font-bold mx-1' style={{ color: `${cor}99` }}>
        {texto}
      </div>
      <hr
        className={`2xl:w-[1.2%] xl:w-[1.5%] lg:w-[1.5%] md:w-[2%] sm:w-[3%] w-[4%] -rotate-[60deg] 2xl:ml-0 xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0 mr-1`}
        style={{ backgroundColor: `${cor}99`, borderColor: `${cor}99` }}
      />

      <hr
        className={`2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[43%] mr-auto`}
        style={{ backgroundColor: `${cor}99`, borderColor: `${cor}99` }}
      />
    </div>
  );
}
