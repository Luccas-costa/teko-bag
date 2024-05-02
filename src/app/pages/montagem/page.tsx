import { Metadata } from "next";

import Aplicativo from "@/components/montagem/Aplicativo/Aplicativo";

export const metadata: Metadata = {
  title: "Treko Bag | montagem",
  description: "montagem de bags",
};

export default function Montagem() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-blue-200'>
      <Aplicativo />
    </div>
  );
}
