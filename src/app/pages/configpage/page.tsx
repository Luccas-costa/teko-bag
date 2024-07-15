"use client";
import { useState } from "react";
import { DeletClientBD } from "@/utils/deletClientBD"; // Certifique-se de ajustar o caminho conforme necessário
import styles from "./teste.module.css"

export default function ConfigPage() {
  const [clientId, setClientId] = useState<string>("");
  const [open, setopen] = useState(false)

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
      <header className={`w-full h-24 px-4 py-2 ${open ? "bg-green-500" : "bg-pink-400"} transition-all fixed top-0 flex justify-between`}>
      <label className={styles.hamburger}>
  <input type="checkbox" />
  <svg viewBox="0 0 32 32">
    <path className={` ${styles.line} ${styles.linetopbottom}`}d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path className={styles.line} d="M7 16 27 16"></path>
  </svg>
</label>
        <button className="size-16 bg-purple-700 ronded" onClick={() => setopen(!open)}>testar</button>
      </header>
      <div className='border border-white-200 rounded p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%]'>

        <h1 className='text-center text-3xl font-semibold text-zinc-200 mb-4'>
          Excluir Cliente
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
