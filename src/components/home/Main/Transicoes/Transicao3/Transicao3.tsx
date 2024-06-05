import React from "react";
import Image from "next/image";
import styles from "../index.module.css";

export default function Transicao3() {
  return (
    <div className={`${styles.geral} bg-green2 `}>
      <Image
        src='/tilt.svg'
        alt='ondas de transiçao'
        width={2000}
        height={100}
      />
    </div>
  );
}
