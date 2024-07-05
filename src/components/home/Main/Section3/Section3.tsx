"use client";
import React from "react";
import { useState } from "react";

import styles from "./index.module.css";
import Imagem from "../../../../../public/teste4.jpg";

import { motion } from "framer-motion";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export default function Section3() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={styles.degrade} id='sobre'>
      <div className='flex flex-wrap-reverse items-center justify-center gap-4 pt-28 pb-28'>
        <motion.div
          className='bg-darkgreen w-[90vw] h-[70vh] md:w-[700px] md:h-[700px] rounded-l-lg  flex flex-col items-center 2xl:pt-28 sm:pt-28
         pt-32 text-yellow1 text-4xl font-extrabold shadow-2xl'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          Sobre nós
          <div
            className={`${styles.sobre} text-xl sm:text-2xl text-white font-semibold w-3/4 h-3/4 pl-2 pt-2 overflow-auto`}
          >
            Somos uma Startup desenvolvida sob um projeto escolar, com um time
            de 12 pessoas mais 1 mentor. Nosso objetivo é trazer soluções
            relacionadas a Eco Bags, fazendo uma mediação e conexão de uma Bag
            totalmente personalizada e especial a sua necessidade, visando a
            Qualidade, Estética e Resistência. <br /> Ao final 25% de nosso
            lucros serão doados a uma instituição de caridade.
          </div>
        </motion.div>
        <motion.div
          style={{
            backgroundImage: `url(${Imagem.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className='rounded-r-lg w-[90vw] h-[70vh] md:w-[700px] md:h-[700px] shadow-2xl'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
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
          {/* <a href=''>exemplofuturo@gmail.com</a> */}
        </div>
      </div>
    </div>
  );
}
