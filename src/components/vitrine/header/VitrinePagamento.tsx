import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import styles from "./geral.module.css";

interface VitrinePagamentoProps {
  onclick: () => void;
  handlerCloseFinal: () => void;
}

export default function VitrinePagamento({
  onclick,
  handlerCloseFinal,
}: VitrinePagamentoProps) {
  const [buttonColor, setButtonColor] = useState("border-black");
  const [isLoading, setIsLoading] = useState(true);

  const copyToClipboard = () => {
    const textToCopy =
      "00020101021126330014br.gov.bcb.pix0111241073658085204000053039865802BR5919LUCAS PEREIRA COSTA6007TAUBATE62070503***63045F83";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setButtonColor("bg-green-600");
        setTimeout(() => {
          setButtonColor("border-black");
        }, 1500);
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center mb-6'>
        <button onClick={onclick}>
          <ArrowLeft size={32} />
        </button>
        <div className='text-2xl font-bold ml-2'>Pagamento</div>
      </div>
      <div className='mt-6 flex flex-col flex-1 items-center space-y-2'>
        <div className='w-full relative'>
          {isLoading && (
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className={styles.loader}></div>
            </div>
          )}
          <Image
            src={"/QrcodePix2.png"}
            alt='Pagamento'
            width={300}
            height={300}
            className='rounded-md mx-auto p-1 border border-black'
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <button
          className={`py-1 border font-semibold text-center border-black w-[30%] rounded-md ${buttonColor}`}
          style={{ marginBottom: "1rem" }}
          onClick={copyToClipboard}
        >
          Copie e Cola
        </button>

        <div className='w-[80%] text-zinc-900 text-center'>
          Obrigado por nos escolher, por favor prossiga com o pagamento do PIX,
          nossos atendentes entraram em contato em no máximo 2 dias uteis,
          referente ao envio de sua{" "}
          <span className='font-semibold'>teko bag</span> qualquer dúvida ou
          problema entre em contato com nos via Dm{" "}
          <a
            href='https://www.instagram.com/tekobags/'
            target='_blank'
            className='font-semibold underline'
          >
            @tekobags
          </a>
        </div>
      </div>
      <button
        className='w-full py-2 mb-2 border border-black hover:bg-dourado font-semibold rounded mt-2'
        onClick={handlerCloseFinal}
      >
        {"->"} Pago! {"->"}
      </button>
    </div>
  );
}
