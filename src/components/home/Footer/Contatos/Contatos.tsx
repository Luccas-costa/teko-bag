"use client";
import React, { useState } from "react";
import Link from "next/link";

import {
  EnvelopeSimple,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Contatos() {
  const [copiado, setCopiado] = useState(false);

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText("luccascosta.comercial@gmail.com");
    setCopiado(true); // Define o estado como true quando o texto é copiado
    setTimeout(() => {
      setCopiado(false); // Restaura o estado para false após 3 segundos
    }, 2000);
  };
  return (
    <div className='flex flex-col justify-center space-y-4'>
      <Link
        href='/pages/montagem/'
        className='rounded sm3:hidden sm2:inline-block pt-2 pb-2 pl-4 pr-4 text-center bg-black/30 hover:bg-zinc-500'
      >
        Monte sua tekoBag
      </Link>
      <div>
        <ul className='flex sm3:flex-wrap sm2:flex-nowrap gap-x-5'>
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
  );
}
