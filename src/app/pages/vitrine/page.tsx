"use client";
import React, { useState, useEffect } from "react";
import { setNotificationCartHandler, getNewCartbagsLength } from "@/lib/bags";
import imagem from "../../../../public/bgvitrine2.svg";

import VitrineHeader from "@/components/vitrine/header/VitrineHeader";
import VitrineMain from "@/components/vitrine/main/VitrineMain";
import VitrineFooter from "@/components/vitrine/footer/VitrineFooter";

export default function Vitrine() {
  // Definindo o estado para o número de itens no carrinho
  const [notificationCart, setNotificationCart] = useState(getNewCartbagsLength());

  useEffect(() => {
    setNotificationCartHandler(setNotificationCart);
    // Cleanup ao desmontar o componente
    return () => {
      setNotificationCartHandler(() => {});
    };
  }, []);

  return (
    <div className="w-full h-full bg-transparent flex flex-col relative">
      <div
        className={`absolute -z-10 h-full w-full bg-cover`}
        style={{
          backgroundImage: `url(${imagem.src})`,
        }}
      ></div>
      <VitrineHeader notificationCart={notificationCart} />
      <VitrineMain />
      <VitrineFooter />
    </div>
  );
}
