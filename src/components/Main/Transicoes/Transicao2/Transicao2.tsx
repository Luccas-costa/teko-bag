import React from "react";
import Image from "next/image";
import styles from "../index.module.css";
import Imagem from "../../../../../public/book.svg";

export default function Transicao2() {
  return (
    <div
      className={`${styles.geral} bg-yellow1 w-[99.86vw] 2xl:h-[15vh] xl:h-[15vh] md:h-[15vh] sm:h-[13vh] h-[12vh]`}
      style={{
        backgroundImage: `url(${Imagem.src})`,
      }}
    ></div>
  );
}
