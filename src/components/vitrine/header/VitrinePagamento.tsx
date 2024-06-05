import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface VitrinePagamentoProps {
  onclick: () => void;
}

export default function VitrinePagamento({ onclick }: VitrinePagamentoProps) {
  const [buttonColor, setButtonColor] = useState("border-black");

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

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center mb-6'>
        <button onClick={onclick}>
          <ArrowLeft size={32} />
        </button>
        <div className='text-2xl font-bold ml-2'>Pagamento</div>
      </div>
      <div className='mt-6 flex flex-col flex-1 items-center space-y-2'>
        <div className='w-full'>
          <Image
            src={"/QrcodePix.png"}
            alt='Pagamento'
            width={300}
            height={300}
            className='rounded-md mx-auto p-1 border border-black'
          />
        </div>
        <button
          className={`py-1 border font-semibold text-center border-black w-[30%] rounded-md ${buttonColor}`}
          onClick={copyToClipboard}
        >
          Copie e Cola
        </button>

        <div>aqui e onde vai vir o textos</div>
      </div>
      <button className='w-full py-2 mb-2 border border-black hover:bg-vsand font-semibold rounded mt-2'>
        {"->"} Pago! {"->"}
      </button>
    </div>
  );
}
