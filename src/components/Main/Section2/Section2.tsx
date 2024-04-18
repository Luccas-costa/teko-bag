import React from "react";
import Image from "next/image";

export default function Section2() {
  return (
    <div className='flex flex-col bg-brown1 w-full h-full'>
      <div className='pl-14 pr-14 pb-28'>
        <div className='flex flex-col mt-16'>
          <div className='text-5xl font-bold text-green1 text-center'>
            Nosso impacto
          </div>
          <span className='text-xl text-gray-400 text-center'>
            Salvando nosso Planeta
          </span>
        </div>
        <div className='grid grid-cols-3 gap-12 mt-12'>
          <div className='flex flex-col'>
            <Image
              src='/teste1.png'
              alt='bags imagem'
              width={500}
              height={500}
              className='rounded-t-lg'
            />
            <div className='bg-black w-[500px] h-52 rounded-b-lg p-3'>
              <div className=' text-white text-3xl font-semibold text-center mt-10'>
                Produtos escolidos a mão
                <div className='text-zinc-300 mt-2 text-xl'>
                  Melhor qualidade em sua mao
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <Image
              src='/teste2.png'
              alt='bags imagem'
              width={500}
              height={500}
              className='rounded-t-lg'
            />
            <div className='bg-black w-[500px] h-52 rounded-b-lg p-3'>
              <div className=' text-white text-3xl font-semibold text-center mt-10'>
                Produtos voltados a saúde e bem estar
                <div className='text-zinc-300 mt-2 text-xl'>
                  Maior conforto e preticidade
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <Image
              src='/teste3.png'
              alt='bags imagem'
              width={500}
              height={500}
              className='rounded-t-lg'
            />
            <div className='bg-black w-[500px] h-52 rounded-b-lg p-3'>
              <div className=' text-white text-3xl font-semibold text-center mt-10'>
                Uma peça unica para o seu look
                <div className='text-zinc-300 mt-2 text-xl'>
                  estampas criativas escolidas especialmente pelo nosso time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
