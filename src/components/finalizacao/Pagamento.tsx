"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import styles from "../vitrine/header/geral.module.css";
import { Qrcode } from "@/lib/qrcodes";
import { DataInputs } from "@/types/DataInput";

interface PagamentoProps {
  valor: string;
}

export default function Pagamento({ valor }: PagamentoProps) {
  const [isLoading, setIsLoading] = useState(true);

  const matchedItem = Qrcode.find((item) => item.preco === valor);

  const copyToClipboard = () => {
    const textToCopy = matchedItem
      ? matchedItem.copiaecola
      : "| Entrar em contato com o suporte |";
    navigator.clipboard.writeText(textToCopy);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center space-y-3 mt-10'>
      <Image
        src={matchedItem ? matchedItem.image : "/ErrorQr.png"}
        alt='Pagamento'
        width={300}
        height={300}
        className='rounded-md mx-auto p-1 bg-white shadow-2xl'
        onLoad={() => setIsLoading(false)}
      />
      <button
        className={`py-2 font-semibold text-center bg-white shadow-2xl w-[30%] rounded`}
        style={{ marginBottom: "1rem" }}
        onClick={copyToClipboard}
      >
        Copie e Cola
      </button>

      {matchedItem ? (
        <div className='w-[60%] text-zinc-900 text-center'>
          Obrigado por nos escolher, por favor prossiga com o pagamento do PIX,
          nossos atendentes entraram em contato em no máximo 2 dias uteis,
          referente ao envio de sua teko bag qualquer dúvida ou problema entre
          em contato com nosco via Dm{" "}
          <a
            href='https://www.instagram.com/tekobags/'
            target='_blank'
            className='underline'
          >
            @tekobags
          </a>{" "}
          ou email: trekobag@gmail.com
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
  );
}
