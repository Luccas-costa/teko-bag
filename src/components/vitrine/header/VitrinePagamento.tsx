import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import styles from "./geral.module.css";
import { Qrcode } from "@/lib/qrcodes";

interface VitrinePagamentoProps {
  onclick: () => void;
  handlerCloseFinal: () => void;
  valor: string;
}

export default function VitrinePagamento({
  onclick,
  handlerCloseFinal,
  valor,
}: VitrinePagamentoProps) {
  const [buttonColor, setButtonColor] = useState("border-black");
  const [isLoading, setIsLoading] = useState(true);

  const matchedItem = Qrcode.find((item) => item.preco === valor);

  const copyToClipboard = () => {
    const textToCopy = matchedItem
      ? matchedItem.copiaecola
      : "| Entrar em contato com o suporte | Entrar em contato com o suporte | Entrar em contato com o suporte | Entrar em contato com o suporte |";
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
    <div className='flex flex-col h-full overflow-y-auto'>
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
            src={matchedItem ? matchedItem.image : "/ErrorQr.png"}
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

        {matchedItem ? (
          <div className='w-[80%] text-zinc-900 text-center'>
            Obrigado por nos escolher, por favor prossiga com o pagamento do
            PIX, nossos atendentes entraram em contato em no máximo 2 dias
            uteis, referente ao envio de sua{" "}
            <span className='font-semibold'>teko bag</span> qualquer dúvida ou
            problema entre em contato com nosco via Dm{" "}
            <a
              href='https://www.instagram.com/tekobags/'
              target='_blank'
              className='font-semibold underline'
            >
              @tekobags
            </a>
          </div>
        ) : (
          <div className='w-[80%] text-zinc-900 text-center'>
            Error o valor de sua compra ultrapassou o limite imposto no site por
            favor entre em contato com nosco via Dm{" "}
            <span className='font-semibold text-blue-400'>
              <a href='https://www.instagram.com/tekobags/' target='_blank'>
                @tekobags
              </a>
            </span>{" "}
            nossa equipe Prosseguirá com sua compra
          </div>
        )}
      </div>
      <button
        className='w-full py-2 mb-2 border border-black hover:bg-dourado font-semibold rounded mt-2'
        onClick={handlerCloseFinal}
      >
        {"<-"} Pago! {"<-"}
      </button>
    </div>
  );
}
