import React, { useEffect, useState } from "react";
import { DataInputs } from "@/types/DataInput";

interface IdentificacaoProps {
  data: DataInputs;
  Error: string;
  handlerUpdateData: (key: string, value: string) => void;
}

export default function Identificacao({
  data,
  handlerUpdateData,
  Error,
}: IdentificacaoProps) {
  const [TellError, setTellError] = useState<boolean>(false);
  const [EmailError, setEmailError] = useState<boolean>(false);
  const [CepError, setCepError] = useState<boolean>(false);

  const handlerErrorTell = () => {
    setTellError(true);
  };

  useEffect(() => {
    console.log("TellError updated:", TellError);
  }, [TellError]);

  const handlerErrorEmail = (value: boolean) => {
    setEmailError(value);
  };

  const handlerErrorCep = (value: boolean) => {
    setCepError(value);
  };

  useEffect(() => {
    if (Error !== "") {
      if (Error.includes("Identificação")) {
        if (Error.includes("Tell")) {
          handlerErrorTell();
        }
        if (Error.includes("Email")) {
          handlerErrorEmail(true);
        }
        if (Error.includes("Cep")) {
          handlerErrorCep(true);
        }
        if (Error.includes("All")) {
          handlerErrorTell();
          handlerErrorEmail(true);
          handlerErrorCep(true);
        }
      }
    }
  }, [Error]);

  return (
    <div>
      <div className='flex flex-col space-y-8 items-center mt-14'>
        <div className='flex flex-col space-y-1'>
          <div>Instagram:</div>
          <input
            className={`dash7:w-[600px] dash8:w-[530px] dash9:w-[430px] dash9_5:w-[400px] dash10:w-[350px] w-[300px] p-3 rounded-lg bg-white shadow-2xl text-neutral-700`}
            type='text'
            placeholder='@ do Instagram [opcional]'
            value={data.Instagram || ""}
            onChange={(e) => handlerUpdateData("Instagram", e.target.value)}
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <div>Telefone:</div>
          <input
            className={`dash7:w-[600px] dash8:w-[530px] dash9:w-[430px] dash9_5:w-[400px] dash10:w-[350px] w-[300px] p-3 rounded-lg shadow-2xl text-neutral-700 ${
              TellError ? "bg-red-500/10" : "bg-white"
            }`}
            type='text'
            placeholder='(XX) XXXXX-XXXX'
            required
            value={data.Tell || ""}
            onChange={(e) => handlerUpdateData("Tell", e.target.value)}
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <div>Email:</div>
          <input
            className={`dash7:w-[600px] dash8:w-[530px] dash9:w-[430px] dash9_5:w-[400px] dash10:w-[350px] w-[300px] p-3 rounded-lg shadow-2xl text-neutral-700 ${
              EmailError ? "bg-red-500/10" : "bg-white"
            }`}
            type='text'
            placeholder='example@email.com'
            value={data.Email || ""}
            onChange={(e) => handlerUpdateData("Email", e.target.value)}
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <div>Cep:</div>
          <input
            className={`dash7:w-[600px] dash8:w-[530px] dash9:w-[430px] dash9_5:w-[400px] dash10:w-[350px] w-[300px] p-3 rounded-lg shadow-2xl text-neutral-700 ${
              CepError ? "bg-red-500/10" : "bg-white"
            }`}
            type='text'
            placeholder='XXXXX-XXX'
            required
            value={data.Cep || ""}
            onChange={(e) => handlerUpdateData("Cep", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
