import React from "react";
import { DataInputs } from "@/types/DataInput";

interface EnderecoProps {
  data: DataInputs;
  handlerUpdateData: (key: string, value: string) => void;
}

export default function Endereco({ data, handlerUpdateData }: EnderecoProps) {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <input
          className='w-[400px] mx-4 bg-black/20 text-white'
          type='text'
          placeholder='@ do Instagram [opcional]'
          value={data.teste || ""}
          onChange={(e) => handlerUpdateData("teste", e.target.value)}
        />
        <input
          className='w-[400px] mx-4 bg-black/20 text-white'
          type='text'
          placeholder='telefone'
          value={data.teste || ""}
          onChange={(e) => handlerUpdateData("teste", e.target.value)}
        />
        <input
          className='w-[400px] mx-4 bg-black/20 text-white'
          type='text'
          placeholder='email'
          value={data.teste || ""}
          onChange={(e) => handlerUpdateData("teste", e.target.value)}
        />
        <input
          className='w-[400px] mx-4 bg-black/20 text-white'
          type='text'
          placeholder='Cep'
          value={data.teste || ""}
          onChange={(e) => handlerUpdateData("teste", e.target.value)}
        />
      </div>
    </div>
  );
}
