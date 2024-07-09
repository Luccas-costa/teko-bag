"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { CaretDown, CaretUp, ClipboardText } from "@phosphor-icons/react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface DashboardClientesProps {
  id: string;
  nome: string;
  email: string;
  dataEntrada: string | null;
  dataCompra: string;
  isOpen: boolean;
  onToggle: () => void;
  itens: string;
  quantidades: string;
  cidade: string;
  cep: string;
  bairro: string;
  rua: string;
  complemento: string;
  numero: string;
  telefone: string;
}

export default function DashboardClientes({
  id,
  nome,
  email,
  dataEntrada,
  dataCompra,
  isOpen,
  onToggle,
  itens,
  quantidades,
  cidade,
  cep,
  bairro,
  rua,
  complemento,
  numero,
  telefone,
}: DashboardClientesProps) {
  const [openItens, setOpenItens] = useState(false);
  const [openEndereco, setOpenEndereco] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openTell, setOpenTell] = useState(false);
  const [isOpenItens, setIsOpenItens] = useState(false);
  const [isOpenEndereco, setIsOpenEndereco] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenTell, setIsOpenTell] = useState(false);
  const [iconWeight, setIconWeight] = useState<"regular" | "fill">("regular");
  const [totalQuantidades, setTotalQuantidades] = useState<number>(0);

  const format = "DD/MM/YYYY HH:mm:ss"; // Formato esperado para exibição
  const entradaDate = dayjs(dataEntrada, format);
  const compraDate = dayjs(dataCompra, format);

  const relativeEntrada = entradaDate.toNow(true);
  const relativeCompra = compraDate.toNow(true);

  useEffect(() => {
    if (isOpenItens && isOpen) {
      // Calcular o total das quantidades
      const quantidadesArray = quantidades.split(",").map(Number);
      const total = quantidadesArray.reduce((acc, curr) => acc + curr, 0);
      setTotalQuantidades(total * 45);
    }
  }, [isOpenItens, isOpen, quantidades]);

  const handlerOpenItens = () => {
    setOpenItens(!openItens);
    setIsOpenItens(!isOpenItens);
    setOpenEndereco(false);
    setOpenEmail(false);
    setIsOpenEndereco(false);
    setIsOpenEmail(false);
    setOpenTell(false);
    setIsOpenTell(false);
  };

  const handlerOpenEndereco = () => {
    setOpenEndereco(!openEndereco);
    setOpenItens(false);
    setOpenEmail(false);
    setIsOpenEndereco(!isOpenEndereco);
    setIsOpenItens(false);
    setIsOpenEmail(false);
    setOpenTell(false);
    setIsOpenTell(false);
  };

  const handlerOpenEmail = () => {
    setOpenEmail(!openEmail);
    setOpenItens(false);
    setOpenEndereco(false);
    setIsOpenEmail(!isOpenEmail);
    setIsOpenEndereco(false);
    setIsOpenItens(false);
    setOpenTell(false);
    setIsOpenTell(false);
  };

  const handlerOpenTell = () => {
    setOpenTell(!openTell);
    setIsOpenTell(!isOpenTell);
    setOpenEndereco(false);
    setOpenItens(false);
    setOpenEmail(false);
    setIsOpenEndereco(false);
    setIsOpenItens(false);
    setIsOpenEmail(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setIconWeight("fill");
    setTimeout(() => {
      setIconWeight("regular");
    }, 1000);
  };
  const copyTell = () => {
    navigator.clipboard.writeText(telefone);
    setIconWeight("fill");
    setTimeout(() => {
      setIconWeight("regular");
    }, 1000);
  };
  const copyCidade = () => {
    navigator.clipboard.writeText(cidade);
    setIconWeight("fill");
    setTimeout(() => {
      setIconWeight("regular");
    }, 1000);
  };
  const copyBairro = () => {
    navigator.clipboard.writeText(bairro);
    setIconWeight("fill");
    setTimeout(() => {
      setIconWeight("regular");
    }, 1000);
  };
  const copyRua = () => {
    navigator.clipboard.writeText(rua);
    setIconWeight("fill");
    setTimeout(() => {
      setIconWeight("regular");
    }, 1000);
  };
  const copyCep = () => {
    navigator.clipboard.writeText(cep);
    setIconWeight("fill");
    setTimeout(() => {
      setIconWeight("regular");
    }, 1000);
  };
  const copyComplemento = () => {
    navigator.clipboard.writeText(complemento);
    setIconWeight("fill");
    setTimeout(() => {
      setIconWeight("regular");
    }, 1000);
  };
  const copyNumero = () => {
    navigator.clipboard.writeText(numero);
    setIconWeight("fill");
    setTimeout(() => {
      setIconWeight("regular");
    }, 1000);
  };

  const itensArray = itens.split(",");
  const quantidadesArray = quantidades.split(",");

  return (
    <>
      <div className='h-[80px] w-full border-y border-zinc-700 dash8:px-5 dash8_5:px-2 dash9:px-2 dash10:px-2 dash10_5:px-2 flex items-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900 relative'>
        <input
          type='checkbox'
          disabled
          className='w-4 h-4 appearance-none bg-transparent border border-zinc-700 rounded shadow-lg checked:bg-[#849994] dash7:mr-8 dash8:mr-4 dash8_5:mr-3 dash9:mr-2 dash10:mr-1  dash10_5:mr-1'
        ></input>
        <div className='dash3:w-[10rem] dash4:w-[7rem] dash5:w-[6rem] dash6:w-[5rem] dash6:text-base dash7:w-[5rem] dash8:w-[5rem] dash8_5:w-[3.8rem] dash7:text-sm dash9:text-xs dash10:text-[11px] dash10_5:text-[11px] dash9:w-[4rem] dash10:w-[3rem] dash10_5:w-[3rem]  text-zinc-400'>
          {id}
        </div>
        <div className='dash1:w-[28rem] dash2:w-[28rem] dash3:w-[25rem] dash4:w-[23rem] dash5:w-[20rem] dash6:w-[18rem] dash6:text-base dash7:w-[15rem] dash7:text-sm dash8:w-[14rem] dash8_5:w-[13rem] dash9:text-xs dash10:text-[11px] dash10_5:text-[11px] dash9:w-[12rem] dash9_5:w-[12rem] dash10:w-[10rem] dash10_5:w-[8rem] flex flex-col '>
          <div>{nome}</div>
          <div className='text-zinc-500 dash7:text-sm dash8:text-xs dash10_5:text-[10px] dash10:w-full dash10_5:w-[7rem] truncate '>
            {email}
          </div>
        </div>
        <div className='dash6:text-base dash7:text-sm dash9:text-xs dash10:text-[11px] dash10_5:text-[11px] text-zinc-400'>
          {relativeCompra} atrás
        </div>
        <button
          className='dash9_5:w-8 dash9_5:h-8 dash10:w-6 dash10:h-6 border absolute dash7:right-5 dash8:right-[0.6rem] dash9:right-2 dash10:right-2 dash10_5:right-[6px] border-zinc-700 dash9_5:rounded-lg dash10:rounded-md dash10_5:rounded-md flex items-center justify-center z-1 bg-zinc-900'
          onClick={onToggle}
        >
          {isOpen ? (
            <CaretUp size={20} weight='regular' />
          ) : (
            <CaretDown size={20} weight='regular' />
          )}
        </button>
      </div>
      {isOpen && (
        <div className='h-[50px] w-full border-y border-zinc-700 dash8:px-5 dash8_5:px-2 dash9:px-2 dash10:px-2 dash10_5:px-2 flex items-center justify-evenly text-zinc-300 font-semibold shadow-lg shadow-zinc-900 relative'>
          <button
            className='flex items-center space-x-1'
            onClick={handlerOpenItens}
          >
            <div>Itens</div>
            <div>
              {openItens ? (
                <CaretUp size={15} weight='bold' />
              ) : (
                <CaretDown size={15} weight='bold' />
              )}
            </div>
          </button>
          <button
            className='flex items-center space-x-1'
            onClick={handlerOpenEndereco}
          >
            <div>Endereço</div>
            <div>
              {openEndereco ? (
                <CaretUp size={15} weight='bold' />
              ) : (
                <CaretDown size={15} weight='bold' />
              )}
            </div>
          </button>
          <button
            className='flex items-center space-x-1'
            onClick={handlerOpenEmail}
          >
            <div>Email</div>
            <div>
              {openEmail ? (
                <CaretUp size={15} weight='bold' />
              ) : (
                <CaretDown size={15} weight='bold' />
              )}
            </div>
          </button>
          <button
            className='flex items-center space-x-1'
            onClick={handlerOpenTell}
          >
            <div>Tell</div>
            <div>
              {openTell ? (
                <CaretUp size={15} weight='bold' />
              ) : (
                <CaretDown size={15} weight='bold' />
              )}
            </div>
          </button>
        </div>
      )}
      {isOpenItens && isOpen && (
        <div className='h-[300px] w-full border-y border-zinc-700 py-1 dash8:px-5 dash8_5:px-2 dash9:px-2 dash10:px-2 dash10_5:px-2 flex flex-col items-center justify-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900 relative'>
          {itensArray.map((item, index) => (
            <React.Fragment key={index}>
              <div>
                {item} | Quantidade {quantidadesArray[index]}
              </div>
              <hr className='w-[75%] h-2 dash9:w-1/2 dash6:w-1/3 dash5:w-1/4 dash4:w-1/4 dash2:w-1/5' />
              {index === itensArray.length - 1 && (
                <div className='text-green-300'>
                  Total: R$: {totalQuantidades}.00 ou R$:{" "}
                  {totalQuantidades + 5.99}{" "}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      {isOpenEndereco && isOpen && (
        <div className='h-[200px] w-full border-y border-zinc-700 dash8:px-5 dash8_5:px-2 dash9:px-2 dash10:px-2 dash10_5:px-2 flex items-center justify-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900 relative dash8:text-base text-[10px] dash9:text-sm dash10:text-xs'>
          <div className='h-[100px] w-1/2 flex justify-evenly items-center flex-col'>
            <div className='flex items-center space-x-1'>
              <div>Cidade: {cidade} </div>
              <button onClick={copyCidade}>
                <ClipboardText size={20} weight={iconWeight} />
              </button>
            </div>
            <div className='flex items-center space-x-1'>
              <div>Cep: {cep} </div>
              <button onClick={copyCep}>
                <ClipboardText size={20} weight={iconWeight} />
              </button>
            </div>
            <div className='flex items-center space-x-1'>
              <div>Bairro: {bairro} </div>
              <button onClick={copyBairro}>
                <ClipboardText size={20} weight={iconWeight} />
              </button>
            </div>
          </div>
          <div className='h-[100px] w-1/2 flex justify-evenly items-center flex-col space-y-2'>
            <div className='flex items-center space-x-1'>
              <div>Rua/Av: {rua} </div>
              <button onClick={copyRua}>
                <ClipboardText size={20} weight={iconWeight} />
              </button>
            </div>
            <div className='flex items-center space-x-1'>
              <div>Complemento: {complemento} </div>
              <button onClick={copyComplemento}>
                <ClipboardText size={20} weight={iconWeight} />
              </button>
            </div>
            <div className='flex items-center space-x-1'>
              <div>Número: {numero} </div>
              <button onClick={copyNumero}>
                <ClipboardText size={20} weight={iconWeight} />
              </button>
            </div>
          </div>
        </div>
      )}
      {isOpenEmail && isOpen && (
        <div className='h-[80px] w-full border-y border-zinc-700 dash8:px-5 dash8_5:px-2 dash9:px-2 dash10:px-2 dash10_5:px-2 flex items-center justify-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900 relative space-x-2'>
          <div>{email}</div>
          <button onClick={copyEmail}>
            <ClipboardText size={20} weight={iconWeight} />
          </button>
        </div>
      )}
      {isOpenTell && isOpen && (
        <div className='h-[80px] w-full border-y border-zinc-700 dash8:px-5 dash8_5:px-2 dash9:px-2 dash10:px-2 dash10_5:px-2 flex items-center justify-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900 relative space-x-2'>
          <div>{telefone}</div>
          <button onClick={copyTell}>
            <ClipboardText size={20} weight={iconWeight} />
          </button>
        </div>
      )}
    </>
  );
}
