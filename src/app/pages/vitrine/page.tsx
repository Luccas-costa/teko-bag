"use client";
import React, { useState } from "react";

import styles from "./vitrine.module.css";
import { setNotificationCartHandler } from "@/lib/bags";

import VitrineHeader from "@/components/vitrine/header/VitrineHeader";
import VitrineMain from "@/components/vitrine/main/VitrineMain";
import VitrineFooter from "@/components/vitrine/footer/VitrineFooter";

export default function Vitrine() {
  // Definindo o estado para o número de itens no carrinho
  const [notificationCart, setNotificationCart] = useState(0);

  // Passando a função para atualizar o estado notificationCart como uma propriedade para o componente @/lib/bags
  setNotificationCartHandler(setNotificationCart);

  return (
    <div className='w-full h-full bg-transparent flex flex-col relative'>
      <div className={`absolute -z-10 h-full w-full ${styles.header}`}></div>
      <VitrineHeader notificationCart={notificationCart} />
      <VitrineMain />
      <VitrineFooter />
    </div>
  );
}
