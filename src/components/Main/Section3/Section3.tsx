"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";
import Imagem from "../../../../public/teste4.jpg";

import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export default function Section3() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={styles.degrade}>
      <div className='flex items-center justify-center gap-x-4 pt-28 pb-28'>
        <div className='bg-green3 w-[47vw] h-[73vh] xl:w-[36.5vw] rounded-l-lg  flex flex-col items-center 2xl:pt-28 pt-6 text-yellow1 text-2xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold'>
          Sobre nós
          <div className='text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-800 font-semibold w-3/4 h-3/4 pl-2 pt-2'>
            Somos um Startup desvolvida sob um projeto escolar, com um time de
            12 pessoas mais 1 mentor. Nosso objetivo é trazer soluções
            relacionadas a Eco Bags, nós da Teko Bag fazemos uma mediação e
            confexão de uma Bag totalemnte personalizada e especial a sua
            necessidade, visando a Qualidade, Estética e Resistência. <br /> Ao
            final 25% de nosso lucros seram doados a uma instuição de caridade.
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${Imagem.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className='rounded-r-lg w-[47vw] h-[73vh] xl:w-[36.5vw]'
        ></div>
      </div>
      <div className='flex flex-col gap-y-4 items-center justify-center'>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a href='https://www.instagram.com/tekobags/' target='_blank'>
            <InstagramLogo size={40} weight={isHovered ? "fill" : "regular"} />
          </a>
        </div>
        <div className='text-black font-semibold text-sm mb-10'>
          <a href=''>exemplofuturo@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
