"use client";
import { useState } from "react";
import { DeletClientBD } from "@/utils/deletClientBD";

export default function ConfigPage() {
  const [clientId, setClientId] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientId(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (!clientId) {
        console.error("ID do cliente não fornecido.");
        return;
      }

      // Chama a função para deletar o cliente
      await DeletClientBD(clientId);
      console.log(`Cliente com ID ${clientId} foi deletado.`);
      setClientId(""); // Limpa o campo de ID após a deleção (opcional)
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      // Adicione tratamento específico para diferentes tipos de erros se necessário
    }
  };

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-zinc-800'>
      <div className='border border-white-200 rounded p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%]'>
        <h1 className='text-center text-3xl font-semibold text-zinc-200 mb-4'>
          Excluir Cliente2
        </h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
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
