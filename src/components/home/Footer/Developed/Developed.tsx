"use client";
import React, { useState } from "react";

export default function Developed() {
  const [copiado, setCopiado] = useState(false);

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText("luccascosta.comercial@gmail.com");
    setCopiado(true); // Define o estado como true quando o texto é copiado
    setTimeout(() => {
      setCopiado(false); // Restaura o estado para false após 3 segundos
    }, 2000);
  };

  return (
    <div className={`text-zinc-700 text-sm bg-zinc-200/40 text-center`}>
      developed by |{" "}
      <button onClick={copyTextToClipboard}>
        <strong
          style={{
            ...(copiado && {
              color: "#86B27A",
            }),
          }}
        >
          luccascosta.comercial@gmail.com
        </strong>
      </button>
    </div>
  );
}
