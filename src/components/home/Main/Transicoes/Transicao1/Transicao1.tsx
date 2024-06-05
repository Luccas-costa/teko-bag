import React from "react";
import styles from "../index.module.css";
import Imagem from "../../../../../../public/waves.svg";

export default function Transicao1() {
  return (
    <div
      className={`${styles.geral} bg-darkgreen w-[99.86vw] 2xl:h-[13vh] xl:h-[13vh] md:h-[13vh] sm:h-[14vh] h-[15vh]`}
      style={{
        backgroundImage: `url(${Imagem.src})`,
      }}
    ></div>
  );
}
