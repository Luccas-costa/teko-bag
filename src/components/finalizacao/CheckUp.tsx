import React, { useState } from "react";
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

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const getIconColor = (iconName: string) => {
    if (selectedIcon === iconName) {
      switch (iconName) {
        case "Wink":
          return "#005aff"; // Dourado
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

  return (
    <div className='flex flex-col items-center'>
      <div className='mt-10 flex space-x-3'>
        <div
          className='w-[100px] flex justify-center'
          onMouseEnter={() => setHoveredIcon("Angry")}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => handleIconClick("Angry")}
        >
          <SmileyAngry
            size={80}
            weight='fill'
            className='transition-all duration-200 cursor-pointer'
            color={getIconColor("Angry")}
          />
        </div>
        <div
          className='w-[100px] flex justify-center'
          onMouseEnter={() => setHoveredIcon("Sad")}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => handleIconClick("Sad")}
        >
          <SmileySad
            size={80}
            weight='fill'
            className='transition-all duration-200 cursor-pointer'
            color={getIconColor("Sad")}
          />
        </div>
        <div
          className='w-[100px] flex justify-center'
          onMouseEnter={() => setHoveredIcon("Meh")}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => handleIconClick("Meh")}
        >
          <SmileyMeh
            size={80}
            weight='fill'
            className='transition-all duration-200 cursor-pointer'
            color={getIconColor("Meh")}
          />
        </div>
        <div
          className='w-[100px] flex justify-center'
          onMouseEnter={() => setHoveredIcon("Happy")}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => handleIconClick("Happy")}
        >
          <Smiley
            size={80}
            weight='fill'
            className='transition-all duration-200 cursor-pointer'
            color={getIconColor("Happy")}
          />
        </div>
        <div
          className='w-[100px] flex justify-center'
          onMouseEnter={() => setHoveredIcon("Wink")}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => handleIconClick("Wink")}
        >
          <SmileyWink
            size={80}
            weight='fill'
            className='transition-all duration-200 cursor-pointer'
            color={getIconColor("Wink")}
          />
        </div>
      </div>
      <div className='flex flex-col space-y-1 mt-10'>
        <div>Comentário:</div>
        <div>
          <textarea
            placeholder='Deixe um comentário sobre sua experiência [opcional]'
            className='w-[600px] h-[300px] shadow-2xl rounded text-neutral-700 resize-none p-2'
            style={{ overflow: "auto", paddingTop: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
