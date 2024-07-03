"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "./Modal";

import {
  Cartbags,
  CartbagsEstampas,
  CartbagsPersonalize,
  addToNewCartbags,
  newCartbags,
} from "@/lib/bags";

import VitrineCard from "./VitrineCard";
import VitrineDivisoria from "../VitrineDivisoria";
import VitrineCardModal from "./VitrineCardModal";
import VitrineDivisoriaMain from "./VitrineDivisoriaMain";

type Bag = {
  id: number;
  produto: string;
  descricao: string;
  preco: string;
  image: string | string[];
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

  const renderCards = (bags: Bag[]) => {
    return bags.map((bag) => (
      <VitrineCard
        key={bag.id}
        produto={bag.produto}
        descricao={bag.descricao}
        preco={bag.preco}
        image={bag.image}
        onAddToCart={() => addToCart(bag)}
        onCardClick={() => openModal(bag)}
      />
    ));
  };

  return (
    <main className={`w-full h-full bg-transparent px-4 py-2`}>
      <VitrineDivisoriaMain texto={"Bags"} cor='#b09775' />

      <div className='grid xl:grid-cols-3 md3:grid-cols-2 grid-cols-1 gap-y-10 my-8 place-items-center'>
        {renderCards(Cartbags)}
      </div>

      <VitrineDivisoriaMain texto={"Estampas"} cor='#CCB596' />

      <div className='grid xl:grid-cols-3 md3:grid-cols-2 grid-cols-1 gap-y-10 my-8 place-items-center'>
        {renderCards(CartbagsEstampas)}
      </div>

      <VitrineDivisoriaMain texto={"Personalize"} cor='#227428' />

      <div className='grid xl:grid-cols-3 md3:grid-cols-2 grid-cols-1 gap-y-10 my-8 place-items-center'>
        {renderCards(CartbagsPersonalize)}
      </div>

      <Link
        href='/'
        className='mx-auto rounded flex items-center justify-center py-2 w-[95%] mb-2 bg-white/30'
      >
        Voltar a Home
      </Link>

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
