"use client";
import React, { useEffect, useState } from "react";
import { DataInputs } from "@/types/DataInput";

interface EnderecoProps {
  data: DataInputs;
  Error: string;
  handlerUpdateData: (key: string, value: string) => void;
}

export default function Endereco({
  data,
  handlerUpdateData,
  Error,
}: EnderecoProps) {
  const [BairroError, setBairroError] = useState<boolean>(false);
  const [RuaAvError, setRuaAvError] = useState<boolean>(false);
  const [NumeroError, setNumeroError] = useState<boolean>(false);
  const [CidadeError, setCidadeError] = useState<boolean>(false);

  useEffect(() => {
    setBairroError(false);
    setRuaAvError(false);
    setNumeroError(false);
    setCidadeError(false);

    if (Error !== "") {
      if (Error.includes("Endereco")) {
        if (Error.includes("All")) {
          setCidadeError(true);
          setNumeroError(true);
          setBairroError(true);
          setRuaAvError(true);
        }
        if (Error.includes("Bairro")) {
          setBairroError(true);
        }
        if (Error.includes("Numero")) {
          setNumeroError(true);
        }
        if (Error.includes("Cidade")) {
          setCidadeError(true);
        }
        if (Error.includes("RuaAv")) {
          setRuaAvError(true);
        }
      }
    }
  }, [Error]);

  return (
    <div>
      <div className='flex flex-col space-y-8 items-center mt-14'>
        <div className='flex flex-col space-y-1'>
          <div>Bairro:</div>
          <input
            className={`w-[600px] p-3 rounded-lg bg-white shadow-2xl text-neutral-700 ${
              BairroError && "bg-red-500/10"
            }`}
            type='text'
            placeholder='Informe seu Bairro'
            value={data.Bairro || ""}
            onChange={(e) => handlerUpdateData("Bairro", e.target.value)}
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <div>Rua/Av:</div>
          <input
            className={`w-[600px] p-3 rounded-lg bg-white shadow-2xl text-neutral-700 ${
              RuaAvError && "bg-red-500/10"
            }`}
            type='text'
            placeholder='Informe sua Rua/Av'
            required
            value={data.RuaAv || ""}
            onChange={(e) => handlerUpdateData("RuaAv", e.target.value)}
          />
        </div>

        <div className='flex flex-col space-y-1'>
          <div>Complemento:</div>
          <input
            className={`w-[600px] p-3 rounded-lg bg-white shadow-2xl text-neutral-700`}
            type='text'
            placeholder='Informe seu Complemento [opcional]'
            required
            value={data.Complemento || ""}
            onChange={(e) => handlerUpdateData("Complemento", e.target.value)}
          />
        </div>

        <div className='flex space-x-3'>
          <div className='flex flex-col space-y-1'>
            <div>Cidade:</div>
            <input
              className={`w-[294px] p-3 rounded-lg bg-white shadow-2xl text-neutral-700 ${
                CidadeError && "bg-red-500/10"
              }`}
              type='text'
              placeholder='Informe sua Cidade'
              value={data.Cidade || ""}
              onChange={(e) => handlerUpdateData("Cidade", e.target.value)}
            />
          </div>

          <div className='flex flex-col space-y-1'>
            <div>Número:</div>
            <input
              className={`w-[294px] p-3 rounded-lg bg-white shadow-2xl text-neutral-700 ${
                NumeroError && "bg-red-500/10"
              }`}
              type='text'
              placeholder='Informe seu Número'
              required
              value={data.Numero || ""}
              onChange={(e) => handlerUpdateData("Numero", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
