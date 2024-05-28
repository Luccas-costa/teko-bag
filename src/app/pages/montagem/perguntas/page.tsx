"use client";

import React, { useState } from "react";

import Pergunta1 from "@/components/montagem/perguntas/Pergunta1";
import Pergunta2 from "@/components/montagem/perguntas/Pergunta2";
import Pergunta3 from "@/components/montagem/perguntas/Pergunta3";
import Pergunta4 from "@/components/montagem/perguntas/Pergunta4";
import Pergunta5 from "@/components/montagem/perguntas/Pergunta5";
import Pergunta6 from "@/components/montagem/perguntas/Pergunta6";
import PerguntaConcluidas from "@/components/montagem/perguntas/PerguntasConcluidas";

export default function Perguntas() {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(true);
  const [display3, setDisplay3] = useState(true);
  const [display4, setDisplay4] = useState(true);
  const [display5, setDisplay5] = useState(true);
  const [display6, setDisplay6] = useState(true);
  const [displayConcluido, setDisplayConcluido] = useState(true);

  const handleDisplay1 = () => {
    setDisplay1(true);
    setDisplay2(false);
  };
  const handleDisplay2 = () => {
    setDisplay2(true);
    setDisplay3(false);
  };
  const handleDisplay3 = () => {
    setDisplay3(true);
    setDisplay4(false);
  };
  const handleDisplay4 = () => {
    setDisplay4(true);
    setDisplay5(false);
  };
  const handleDisplay5 = () => {
    setDisplay5(true);
    setDisplay6(false);
  };
  const handleDisplay6 = () => {
    setDisplay6(true);
    setDisplayConcluido(false);
  };

  return (
    <div>
      <Pergunta1 display={display1} handlerdisplay={handleDisplay1} />
      <Pergunta2 display={display2} handlerdisplay={handleDisplay2} />
      <Pergunta3 display={display3} handlerdisplay={handleDisplay3} />
      <Pergunta4 display={display4} handlerdisplay={handleDisplay4} />
      <Pergunta5 display={display5} handlerdisplay={handleDisplay5} />
      <Pergunta6 display={display6} handlerdisplay={handleDisplay6} />
      <PerguntaConcluidas display={displayConcluido} />
    </div>
  );
}
