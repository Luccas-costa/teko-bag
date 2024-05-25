"use client";
import React, { useEffect, useState } from "react";
import { Cartbags, addToNewCartbags, newCartbags } from "../../../lib/bags";
import VitrineCard from "./VitrineCard";
import VitrineDivisoria from "../VitrineDivisoria";

type Bag = {
  id: number;
  produto: string;
  descricao: string;
  preco: string;
  image: string;
  quantidade: number;
};

export default function VitrineMain() {
  const [localCartbags, setLocalCartbags] = useState<Bag[]>([]);

  useEffect(() => {
    setLocalCartbags([...newCartbags]);
    console.log(newCartbags);
  }, []);

  const addToCart = (bag: Omit<Bag, "quantidade">) => {
    addToNewCartbags(bag);
    setLocalCartbags([...newCartbags]);
  };

  return (
    <main className='h-[89.5vh] w-full bg-zinc-700 px-4 py-2 overflow-y-auto'>
      <VitrineDivisoria />
      <div className='grid xl:grid-cols-3 md3:grid-cols-2 grid-cols-1 gap-y-10 my-8 place-items-center'>
        {Cartbags.map((bag) => (
          <VitrineCard
            key={bag.id}
            produto={bag.produto}
            descricao={bag.descricao}
            preco={bag.preco}
            image={bag.image}
            onAddToCart={() => addToCart(bag)}
          />
        ))}
      </div>
      <VitrineDivisoria />
    </main>
  );
}
