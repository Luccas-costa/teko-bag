"use client";
import React, { useState, useEffect } from "react";
import { DataInputs } from "@/types/DataInput";

import {
  Smiley,
  SmileyMeh,
  SmileySad,
  SmileyWink,
  SmileyAngry,
} from "@phosphor-icons/react/dist/ssr";

interface CheckUpProps {
  data: DataInputs;
  handlerUpdateData: (key: string, value: string) => void;
}

export default function CheckUp({ data, handlerUpdateData }: CheckUpProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [iconSize, setIconSize] = useState<number>(80);

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const getIconColor = (iconName: string) => {
    if (selectedIcon === iconName) {
      switch (iconName) {
        case "Wink":
          return "#005aff"; // Azul
        case "Happy":
          return "#4CAF50"; // Verde
        case "Meh":
          return "#FFEB3B"; // Amarelo
        case "Sad":
          return "#FFa500"; // Laranja
        case "Angry":
          return "#F44336"; // Vermelho
        default:
          return "#52525B"; // Cor padrão
      }
    }
    return hoveredIcon === iconName ? "#212121" : "#52525B"; // Cor padrão quando não selecionado
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 360) {
        setIconSize(62);
      } else if (window.innerWidth < 450) {
        setIconSize(70);
      } else {
        setIconSize(80);
      }
    };

    // Define o tamanho inicial
    handleResize();

    // Adiciona o listener de resize
    window.addEventListener("resize", handleResize);

    // Limpa o listener ao desmontar o componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div className='mt-10 flex dash9:space-x-3 dash9_5:space-x-2'>
        {[
          { Icon: SmileyAngry, name: "Angry" },
          { Icon: SmileySad, name: "Sad" },
          { Icon: SmileyMeh, name: "Meh" },
          { Icon: Smiley, name: "Happy" },
          { Icon: SmileyWink, name: "Wink" },
        ].map(({ Icon, name }) => (
          <div
            key={name}
            className='dash8:w-[100px] flex justify-center'
            onMouseEnter={() => setHoveredIcon(name)}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => handleIconClick(name)}
          >
            <Icon
              size={iconSize}
              weight='fill'
              className='transition-all duration-200 cursor-pointer'
              color={getIconColor(name)}
            />
          </div>
        ))}
      </div>
      <div className='flex flex-col space-y-1 mt-10'>
        <div>Comentário:</div>
        <div>
          <textarea
            placeholder='Deixe um comentário sobre sua experiência [opcional]'
            className='dash7:w-[600px] dash8:w-[530px] dash9:w-[430px] dash9_5:w-[400px] dash10:w-[350px] w-[300px] h-[300px] shadow-2xl rounded text-neutral-700 resize-none p-2'
            style={{ overflow: "auto", paddingTop: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
