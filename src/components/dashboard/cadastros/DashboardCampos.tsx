"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { insertBD } from "@/utils/insertBD";
import { getFormattedDate } from "@/utils/diaAtual";

export default function DashboardCampos() {
  const emailRef = useRef<HTMLInputElement>(null);
  const telefoneRef = useRef<HTMLInputElement>(null);
  const instagramRef = useRef<HTMLInputElement>(null);
  const bairroRef = useRef<HTMLInputElement>(null);
  const ruaRef = useRef<HTMLInputElement>(null);
  const cidadeRef = useRef<HTMLSelectElement>(null);
  const complementoRef = useRef<HTMLInputElement>(null);
  const numeroRef = useRef<HTMLInputElement>(null);
  const cepRef = useRef<HTMLInputElement>(null);
  const itensRef = useRef<HTMLInputElement>(null);
  const quantidadeRef = useRef<HTMLInputElement>(null);
  const [atendido, setAtendido] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const idAleatorio = () => {
    const id = Math.floor(10000 + Math.random() * 90000);
    return id.toString();
  };

  const handleFinal = async () => {
    setIsSending(true);
    const id = idAleatorio();
    const datacompra = getFormattedDate();
    const dados = {
      id: id,
      email: emailRef.current?.value || "Não Informado",
      telefone: telefoneRef.current?.value || "Não Informado",
      instagram: instagramRef.current?.value || "Não Informado",
      bairro: bairroRef.current?.value || "Não Informado",
      rua: ruaRef.current?.value || "Não Informado",
      complemento: complementoRef.current?.value || "Não Informado",
      nurmo: numeroRef.current?.value || "Não Informado",
      cep: cepRef.current?.value || "Não Informado",
      cidade: cidadeRef.current?.value || "Não Informado",
      itens: itensRef.current?.value || "Não Informado",
      quantidade: quantidadeRef.current?.value || "Não Informado",
      datacompra: datacompra,
      atendido: atendido,
    };

    console.log(dados);

    await insertBD(dados);
    // Limpar todos os inputs
    if (emailRef.current) emailRef.current.value = "";
    if (telefoneRef.current) telefoneRef.current.value = "";
    if (instagramRef.current) instagramRef.current.value = "";
    if (bairroRef.current) bairroRef.current.value = "";
    if (ruaRef.current) ruaRef.current.value = "";
    if (cidadeRef.current) cidadeRef.current.value = "";
    if (complementoRef.current) complementoRef.current.value = "";
    if (numeroRef.current) numeroRef.current.value = "";
    if (cepRef.current) cepRef.current.value = "";
    if (itensRef.current) itensRef.current.value = "";
    if (quantidadeRef.current) quantidadeRef.current.value = "";
    setAtendido(false);
    setIsSending(false);
  };

  return (
    <div className='w-screen flex flex-col'>
      <div className='mt-4 ml-4 cursor-pointer'>
        <Link href='/pages/dashboard' className='flex space-x-2 items-center'>
          <ArrowLeft size={40} color='white' weight='bold' />
          <span className='text-white font-bold text-2xl'>
            Voltar para Dashboard
          </span>
        </Link>
      </div>

      <div className='mx-auto text-lg mt-6 text-yellow-500 p-2 border border-yellow-500 w-[85%] dash10:w-[70%] menuxm:w-[50%] dash2:w-[30%] text-center rounded'>
        * Se não souber quaisquer das informações dos campos abaixo, favor
        deixar em branco sem alterações, que ele será preenchido automaticamente
      </div>

      <div className='mx-auto flex flex-col w-[98%] menuxm:w-[90%] dash7:w-[80%] dash2:w-2/3 mt-12'>
        <div className='flex space-x-1 dash9_5:space-x-2 dash7:space-x-3'>
          <input
            ref={emailRef}
            type='text'
            placeholder='nome@gmail.com'
            className='w-1/3 mb-4 p-[1rem] bg-neutral-950/30 dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          />

          <input
            ref={telefoneRef}
            type='text'
            placeholder='(xx) xx xxxxx-xxxx'
            className='w-1/3 mb-4 p-[1rem] bg-neutral-950/30 dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          />
          <input
            ref={instagramRef}
            type='text'
            placeholder='@Instagram'
            className='w-1/3 mb-4 p-[1rem] bg-neutral-950/30 dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          />
        </div>

        <div className='flex space-x-1 dash9_5:space-x-2 dash7:space-x-3'>
          <input
            ref={bairroRef}
            type='text'
            placeholder='Bairro'
            className='w-1/2 mb-4 p-[1rem] bg-neutral-950/30 dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          />
          <input
            ref={ruaRef}
            type='text'
            placeholder='Rua / Av'
            className='w-[33%] mb-4 p-[1rem] bg-neutral-950/30 dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          />
          <select
            ref={cidadeRef}
            id='cidadeSelect'
            className='w-[17%] mb-4 p-[1rem] bg-neutral-950/30 focus:bg-neutral-600 focus:rounded-b-none dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          >
            <option value=''>Escolha uma cidade</option>
            <option value='Taubaté'>Taubaté</option>
            <option value='Pindamonhangaba'>Pindamonhangaba</option>
            <option value='Tremembé'>Tremembé</option>
            <option value='Caçapava'>Caçapava</option>
            <option value='Sao jose dos campos'>São José dos Campos</option>
          </select>
        </div>

        <div className='flex space-x-1 dash9_5:space-x-2 dash7:space-x-3'>
          <input
            ref={complementoRef}
            type='text'
            placeholder='Complemento'
            className='w-1/2 mb-4 p-[1rem] bg-neutral-950/30 dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          />

          <input
            ref={numeroRef}
            type='text'
            placeholder='Numero'
            className='w-1/4 mb-4 p-[1rem] bg-neutral-950/30 dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          />
          <input
            ref={cepRef}
            type='text'
            placeholder='Cep'
            className='w-1/4 mb-4 p-[1rem] bg-neutral-950/30 dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          />
        </div>
      </div>

      <div className='mx-auto mt-6 text-lg text-yellow-500 p-2 border border-yellow-500 w-[85%] dash10:w-[70%] menuxm:w-[50%] dash2:w-[30%] text-center rounded'>
        * Escreva todos os itens e as Quantidades compradas os separando apenas
        por uma virgula, como o exemplo abaixo: <br />{" "}
        <span className='text-zinc-300'>
          Bag do Sol com frase, Estampa floral estilo 1, Personalize sua bag,
          Estampa floral estilo 5
        </span>
      </div>

      <div className='flex flex-col justify-center w-screen mt-12'>
        <div className='mx-auto flex space-x-1 dash9_5:space-x-2 dash7:space-x-3 w-[98%] menuxm:w-[90%] dash7:w-[80%] dash2:w-2/3'>
          <input
            ref={itensRef}
            type='text'
            placeholder='Itens'
            className='w-1/2 mb-4 p-[1rem] bg-neutral-950/30 dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          />
          <input
            ref={quantidadeRef}
            type='text'
            placeholder='Quantidades'
            className='w-1/2 mb-4 p-[1rem] bg-neutral-950/30 dark:bg-white/15 border-none rounded-xl text-white placeholder:text-zinc-300'
          />
        </div>
        <div className='mx-auto flex items-center space-x-2 text-white font-bold text-lg'>
          <input
            type='checkbox'
            className='size-6 appearance-none bg-transparent border border-zinc-700 rounded shadow-lg checked:bg-[#849994]'
            onChange={(e) => setAtendido(e.target.checked)}
            checked={atendido}
          />
          <span>Já foi atendido(a) ?</span>
        </div>
      </div>

      <button
        className={`bg-green1/50 rounded px-3 py-3 items-center font-bold mt-14 dash4:mt-28 w-[60%] dash2:w-[40%] mx-auto text-center ${
          isSending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={handleFinal}
        disabled={isSending}
      >
        {isSending ? "Enviando..." : "Enviar Cadastro"}
      </button>
    </div>
  );
}
