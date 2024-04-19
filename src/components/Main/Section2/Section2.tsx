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
        <div className='flex flex-wrap justify-evenly items-center gap-12 mt-12'>
          <div
            className='bg-black flex flex-col rounded-lg'
            style={{ width: "500px", height: "600px" }}
          >
            <Image
              src='/teste1.png'
              alt='bags imagem'
              width={500}
              height={500}
              className='rounded-t-lg'
            />
            <div className='text-white text-3xl font-semibold text-center pt-16 pb-16'>
              Produtos escolhidos a mão
              <div className='text-zinc-300 mt-2 text-xl'>
                Melhor qualidade a seu serviço
              </div>
            </div>
          </div>

          <div
            className='bg-black flex flex-col rounded-lg'
            style={{ width: "500px", height: "600px" }}
          >
            <Image
              src='/teste2.png'
              alt='bags imagem'
              width={500}
              height={500}
              className='rounded-t-lg'
            />
            <div className='text-white text-3xl font-semibold text-center pt-16 pb-16'>
              Produtos voltados a saúde <br /> e bem estar
              <div className='text-zinc-300 mt-2 text-xl'>
                maior conforto e praticidade
              </div>
            </div>
          </div>

          <div
            className='bg-black flex flex-col rounded-lg'
            style={{ width: "500px", height: "600px" }}
          >
            <Image
              src='/teste3.png'
              alt='bags imagem'
              width={500}
              height={500}
              className='rounded-t-lg'
            />
            <div className='text-white text-3xl font-semibold text-center pt-16 pb-16'>
              Uma peça única para seu <br />
              Moda Style
              <div className='text-zinc-300 mt-2 text-xl'>
                estampas criativas escolhidas pelo <br /> nosso time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
