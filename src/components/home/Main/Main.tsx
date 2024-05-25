import React from "react";

import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";

import Transicao1 from "./Transicoes/Transicao1/Transicao1";
import Transicao2 from "./Transicoes/Transicao2/Transicao2";
import Transicao3 from "./Transicoes/Transicao3/Transicao3";

export default function Main() {
  return (
    <main>
      <Section1 />
      <Transicao1 />
      <Section2 />
      <Transicao2 />
      <Section3 />
    </main>
  );
}
