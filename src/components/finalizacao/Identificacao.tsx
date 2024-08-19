import React from "react";
import { DataInputs } from "@/types/DataInput";

interface IdentificacaoProps {
  data: DataInputs;
  handlerUpdateData: (key: string, value: string) => void;
}

export default function Identificacao({
  data,
  handlerUpdateData,
}: IdentificacaoProps) {
  return (
    <div>
      <div>teste</div>
      <div>
        <input
          className='w-[400px] mx-4 bg-black/20 text-white'
          type='text'
          placeholder='teste'
          value={data.name || ""}
          onChange={(e) => handlerUpdateData("name", e.target.value)}
        />
        <input
          className='w-[400px] mx-4 bg-black/20 text-white'
          type='text'
          placeholder='teste'
          value={data.email || ""}
          onChange={(e) => handlerUpdateData("email", e.target.value)}
        />
      </div>
    </div>
  );
}
