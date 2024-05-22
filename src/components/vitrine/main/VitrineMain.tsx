import React from "react";

import VitrineCard from "./VitrineCard";
import VitrineDivisoria from "../VitrineDivisoria";

export default function VitrineMain() {
  return (
    <main className='h-[89.5vh]  w-full bg-zinc-700 px-4 py-2 overflow-y-auto'>
      <VitrineDivisoria />
      <div className='grid xl:grid-cols-3 md3:grid-cols-2 grid-cols-1 gap-y-10 my-8  place-items-center'>
        {Array.from({ length: 9 }).map((_, index) => (
          <VitrineCard key={index} />
        ))}
      </div>
      <VitrineDivisoria />
    </main>
  );
}
