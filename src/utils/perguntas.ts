const PERGUNTAS_KEY = "perguntas";

export const obterRespostas = (): { [key: number]: number | null } => {
  if (typeof window !== "undefined") {
    const storedRespostas = localStorage.getItem(PERGUNTAS_KEY);
    if (storedRespostas) {
      return JSON.parse(storedRespostas);
    }
  }
  return {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  };
};
// vamo documentar essa bagaça
// aqui em cima temos oque pega a resposta e o que salva sendo 1 a primeira pergunta e ass por diante, e a resposta e
// salva em number ent 1,2,3 e etc a unica que passa de 5 e a pergunta4

//obs pra savber a resposta tem que decodificar pos ela esta em number

// ok aqui em baixo temos a funcition que permit eu acessar isso em outros arquivos tipo
//isso que fiz na vitrini que permitia eu acessa e escreve a resposta na tela

//===================================================================================//

// Vitrine.tsx

// import React, { useEffect, useState } from "react";
// import { obterRespostas } from "@/utils/perguntas";

// // Objeto contendo os textos para cada pergunta
// const respostasTextos: { [key: number]: string[] | string } = {
//   1: ["Instagram", "Qualidade", "Trabalho"],
//   2: ["Tik Tok", "Sustentabilidade", "Academia"],
//   3: ["Amigos", "Versatilidade", "Escola"],
//   5: ["Outro", "Outros", "Todas"],
// };

// // Objeto contendo as cores para a pergunta 4
// const respostasCores: { [key: number]: string } = {
//   1: "Escola",
//   2: "Estética",
//   3: "Dia a dia",
//   4: "Outra1",
//   5: "Outra2",
//   6: "Outra3",
//   7: "Outra4",
//   8: "Outra5",
//   9: "Outra6",
// };

// export default function Vitrine() {
//   const [respostas, setRespostas] = useState<{ [key: number]: number | null }>(
//     {}
//   );

//   useEffect(() => {
//     const respostasObtidas = obterRespostas();
//     setRespostas(respostasObtidas);
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Respostas das Perguntas</h1>
//       {Object.keys(respostas).map((key) => {
//         const pergunta = parseInt(key);
//         const respostaNumero = respostas[pergunta];
//         let respostaTexto = "Não respondida";
//         if (pergunta === 4) {
//           respostaTexto =
//             respostaNumero !== null ? respostasCores[respostaNumero] : respostaTexto;
//         } else {
//           respostaTexto =
//             respostaNumero !== null
//               ? (respostasTextos[pergunta] as string[])[respostaNumero - 1]
//               : respostaTexto;
//         }
//         return (
//           <p key={key} className="mb-2">
//             Pergunta {pergunta}: {respostaTexto}
//           </p>
//         );
//       })}
//     </div>
//   );
// }

//===================================================================================//

export const salvarResposta = (pergunta: number, resposta: number) => {
  const respostas = obterRespostas();
  respostas[pergunta] = resposta;
  if (typeof window !== "undefined") {
    localStorage.setItem(PERGUNTAS_KEY, JSON.stringify(respostas));
  }
};
