import React from "react";
import { DataInputs } from "@/types/DataInput";

interface EnderecoProps {
  data: DataInputs;
  handlerUpdateData: (key: string, value: string) => void;
}
export default function Endereco({ data, handlerUpdateData }: EnderecoProps) {
  return (
    <div>
      <div>teste2</div>
      <input
        className='w-[400px] mx-4 bg-black/20 text-white'
        type='text'
        placeholder='teste2'
        value={data.teste || ""}
        onChange={(e) => handlerUpdateData("teste", e.target.value)}
      />
    </div>
  );
}
