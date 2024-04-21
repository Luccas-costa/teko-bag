"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import {
  EnvelopeSimple,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  const [copiado, setCopiado] = useState(false);

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText("luccascosta.comercial@gmail.com");
    setCopiado(true); // Define o estado como true quando o texto é copiado
    setTimeout(() => {
      setCopiado(false); // Restaura o estado para false após 3 segundos
    }, 2000);
  };

  return (
    <div className='flex flex-col items-center pt-12 pl-16 pr-16'>
      <div className='flex gap-x-6 pb-12'>
        <div className='flex items-center justify-center'>
          <Image
            src='/logo-transparente.png'
            width={125}
            height={125}
            alt='logo'
          />
        </div>
        <hr className='w-1 md:h-48 sm:h-52 h-[32vh] bg-zinc-600' />
        <div className='text-zinc-600 font-semibold flex flex-col flex-nowrap items-start'>
          <h1 className='text-lg'>~Time~</h1>
          <div>
            <ul>
              <li className='lg:text-base md:text-sm text-xs'>
                <strong>Mentor:</strong> Patrick
              </li>
              <li className='lg:text-base md:text-sm text-xs'>
                <strong>CEO:</strong> Ana Clara
              </li>
              <li className='lg:text-base md:text-sm text-xs'>
                <strong>Diretor financeiro:</strong> Ana Luiza
              </li>
              <li className='lg:text-base md:text-sm text-xs'>
                <strong>Diretores administrativo:</strong> Lauren e Sarah
              </li>
              <li className='lg:text-base md:text-sm text-xs'>
                <strong>Marketing - produto/serviço:</strong> Laís,João, kallan,
                lucas ,kevin ,pedro,juan
              </li>
              <li className='lg:text-base md:text-sm text-xs'>
                <strong>Marketing - marca/comunicação:</strong> Ana Julia,
                Lucena
              </li>
            </ul>
          </div>
        </div>
        <hr className='w-1 md:h-48 sm:h-52 h-[32vh] bg-zinc-600' />
        <div className='flex flex-col justify-center space-y-4'>
          <a
            href='https://www.instagram.com/tekobags/'
            target='_blank'
            className='rounded pt-2 pb-2 pl-4 pr-4 text-center bg-black/30 hover:bg-zinc-500'
          >
            Contato
          </a>
          <div>
            <ul className='flex gap-x-4'>
              <li className='p-2 bg-black/30 rounded-full hover:bg-zinc-500'>
                <a href='https://www.instagram.com/tekobags/' target='_blank'>
                  <InstagramLogo size={30} color='#fff' />
                </a>
              </li>
              <li className='pt-2 pb-1 pl-2 pr-2 bg-black/30 rounded-full hover:bg-zinc-500'>
                <a
                  href='https://www.tiktok.com/@teko.bag?lang=pt-BR'
                  target='_blank'
                >
                  <TiktokLogo size={30} color='#fff' />
                </a>
              </li>
              <li
                className='p-2 bg-black/30 rounded-full hover:bg-zinc-500 relative'
                style={{
                  ...(copiado && {
                    backgroundColor: "#86B27A",
                  }),
                }}
              >
                <button onClick={copyTextToClipboard}>
                  <EnvelopeSimple size={30} color='#fff' />
                </button>
                {copiado && (
                  <h1 className='absolute left-12 top-1/2 trasletate-x-1/2 -translate-y-1/2 text-green2'>
                    COPIADO
                  </h1>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-zinc-700 text-sm'>
        developed by |{" "}
        <button>
          <strong>luccascosta.comercial@gmail.com</strong>
        </button>
      </div>
    </div>
  );
}
