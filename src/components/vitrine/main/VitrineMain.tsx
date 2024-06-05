"use client";
import React, { useEffect, useState } from "react";
import { Cartbags, addToNewCartbags, newCartbags } from "../../../lib/bags";
import VitrineCard from "./VitrineCard";
import VitrineDivisoria from "../VitrineDivisoria";
import Modal from "./Modal";
import VitrineCardModal from "./VitrineCardModal";

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
  const [selectedBag, setSelectedBag] = useState<Bag | null>(null);

  useEffect(() => {
    setLocalCartbags([...newCartbags]);
    console.log(newCartbags);
  }, []);

  const addToCart = (bag: Omit<Bag, "quantidade">) => {
    addToNewCartbags(bag);
    setLocalCartbags([...newCartbags]);
  };

  const openModal = (bag: Bag) => {
    setSelectedBag(bag);
  };

  const closeModal = () => {
    setSelectedBag(null);
  };

  return (
    <main className={` w-full h-full bg-transparent px-4 py-2`}>
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
            onCardClick={() => openModal(bag)}
          />
        ))}
      </div>

      {selectedBag && (
        <Modal onClose={closeModal}>
          <VitrineCardModal
            produto={selectedBag.produto}
            descricao={selectedBag.descricao}
            preco={selectedBag.preco}
            image={selectedBag.image}
            onAddToCart={() => addToCart(selectedBag)}
          />
        </Modal>
      )}
    </main>
  );
}
