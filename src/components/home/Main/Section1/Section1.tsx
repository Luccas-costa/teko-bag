"use client";
import React, { useState } from "react";
import Image from "next/image";
import Imagem from "../../../../../public/wppmato3.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Section1() {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className='bg-green2 2xl:pl-16 xl:pl-12 md:pl-8 sm:pl-4 pl-2 2xl:pr-16 xl:pr-12 md:pr-8 sm:pr-4 pr-2 2xl:pb-16 xl:pb-12 md:pb-8 sm:pb-4 pb-2 pt-2 z-0'
      id='inicio'
    >
      <div
        className={`2xl:w-[93vw] 2xl:h-[80vh] xl:h-[90vh] lg:h-[90vh] md:h-[85vh] sm:h-[85vh] h-[85vh] relative overflow-hidden shadow-2xl`}
      >
        <Image
          src={Imagem}
          alt='Imagem de fundo principal'
          layout='fill'
          objectFit='cover'
          onLoad={handleImageLoad}
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease" }}
        />
        <motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl 2xl:text-7xl xl:text-7xl lg:text-6xl md:text-8xl sm:text-7xl text-center font-bold flex flex-col'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Venha conhecer sua TekoBag{"'"}s
          <div className='mt-4'>
            <button className='text-3xl 2xl:text-4xl xl:text-4xl lg:text-6xl md:text-5xl sm:text5xl border-2 xl:border-3 border-white px-4 py-2 hover:bg-white hover:text-green2'>
              <Link href='/pages/montagem/'>Montagem</Link>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
