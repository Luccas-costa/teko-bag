import { ArrowLeft } from "lucide-react";
import React from "react";
import Image from "next/image";

interface VitrineAgradecimentoProps {
  handlerCloseAgradecimento: () => void;
  onclick: () => void;
}

export default function VitrineAgradecimento({
  handlerCloseAgradecimento,
  onclick,
}: VitrineAgradecimentoProps) {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center mb-6'>
        <button onClick={onclick}>
          <ArrowLeft size={32} />
        </button>
        <div className='text-2xl font-bold ml-2'>Agradecimento</div>
      </div>
      <div className='w-full flex items-center justify-center mt-12'>
        <Image src='/Checked.png' alt='Checked' width={300} height={300} />
      </div>
      <div className='text-center w-[70%] mx-auto text-zinc-900'>
        Um email foi enviado para o seu e-mail confirmando sua compra e <br />
        <span className='font-bold'>se vemos daqui a pouco!</span>
      </div>
      <button
        className='w-full py-2 mb-2 border absolute bottom-0 border-black hover:bg-dourado font-semibold rounded mt-2'
        onClick={handlerCloseAgradecimento}
      >
        Fechar carrinho
      </button>
    </div>
  );
}
