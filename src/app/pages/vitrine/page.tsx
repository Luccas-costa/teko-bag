import React from "react";

import VitrineHeader from "@/components/vitrine/header/VitrineHeader";
import VitrineMain from "@/components/vitrine/main/VitrineMain";
import VitrineFooter from "@/components/vitrine/footer/VitrineFooter";
import VitrineDivisoria from "@/components/vitrine/VitrineDivisoria";

export default function Vitrine() {
  return (
    <div className='w-full h-full bg-zinc-700 flex flex-col'>
      <VitrineHeader />

      <VitrineDivisoria />

      <VitrineMain />

      <VitrineDivisoria />

      <VitrineFooter />
    </div>
  );
}
