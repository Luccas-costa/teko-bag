import React from "react";

import VitrineHeader from "@/components/vitrine/header/VitrineHeader";
import VitrineMain from "@/components/vitrine/main/VitrineMain";
import VitrineFooter from "@/components/vitrine/footer/VitrineFooter";

export default function Vitrine() {
  return (
    <div className='w-full h-full bg-zinc-700 flex flex-col'>
      <VitrineHeader />

      <VitrineMain />

      <VitrineFooter />
    </div>
  );
}
