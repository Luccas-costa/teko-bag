"use client";
import { useState } from "react";
import { DeletClientBD } from "@/utils/deletClientBD";

export default function ConfigPage() {
  const [clientId, setClientId] = useState<string>("");

  const handleDelete = async () => {
    try {
      const rowsAffected = await DeletClientBD(clientId);
      console.log(`Número de linhas afetadas: ${rowsAffected}`);
      // Limpar o campo após a exclusão
      setClientId("");
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientId(event.target.value);
  };

  return (
    <div className='w-screen h-screen flex flex-col items-center justyfy-center bg-zinc-800'>
      <div className='border border-white-200 rounded p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%]'>
        <h1 className='text-center text-3xl font-semibold text-zinc-200 mb-4'>
          Excluir Cliente
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleDelete();
          }}
          className='flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-center text-xl font-semibold text-zinc-200 mb-1'>
              ID do Cliente:
            </span>
            <input
              type='text'
              value={clientId}
              onChange={handleChange}
              className='border border-white-200 rounded p-2 bg-transparent text-zinc-300 font-semibold'
            />
          </label>
          <button
            type='submit'
            className='bg-red-500 hover:bg-red-700 active:bg-red-700 text-white font-bold py-2 px-4 rounded'
          >
            Excluir Cliente
          </button>
        </form>
      </div>
    </div>
  );
}
