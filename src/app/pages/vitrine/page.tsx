"use client";
import React, { useState } from "react";
import VitrineHeader from "@/components/vitrine/header/VitrineHeader";
import VitrineMain from "@/components/vitrine/main/VitrineMain";
import VitrineFooter from "@/components/vitrine/footer/VitrineFooter";
import { setNotificationCartHandler } from "@/lib/bags";

export default function Vitrine() {
  // Definindo o estado para o número de itens no carrinho
  const [notificationCart, setNotificationCart] = useState(0);

  // Passando a função para atualizar o estado notificationCart como uma propriedade para o componente @/lib/bags
  setNotificationCartHandler(setNotificationCart);

  return (
    <div className='w-full h-full bg-zinc-700 flex flex-col'>
      <VitrineHeader notificationCart={notificationCart} />{" "}
      {/* Passando notificationCart para VitrineHeader */}
      <VitrineMain />
      <VitrineFooter />
    </div>
  );
}
