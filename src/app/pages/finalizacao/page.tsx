"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import "../../globals.css";
import { insertBD } from "@/utils/insertBD";
import { DataInputs } from "@/types/DataInput";
import { useUserEmail } from "@/hooks/useUserEmail";
import { useFirstName } from "@/hooks/useFirstName";
import { getFormattedDate } from "@/utils/diaAtual";
import CheckUp from "@/components/finalizacao/CheckUp";
import Endereco from "@/components/finalizacao/Endereco";
import { sendEmailCompra } from "@/utils/sendEmailCompra";
import { clearCart, newCartbags } from "../../../lib/bags";
import Pagamento from "@/components/finalizacao/Pagamento";
import Identificacao from "@/components/finalizacao/Identificacao";
import { sendEmailCompraCliente } from "@/utils/sendEmailCompraCliente";

import axios from "axios";
import {
  User,
  Star,
  MapPinLine,
  CurrencyCircleDollar,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";

export default function Finalizacao() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const valor = searchParams.get("valor") || ""; // Obtém o valor da URL

  const dataInputs = {
    Instagram: "",
    Email: "",
    Tell: "",
    Cep: "",

    Cidade: "",
    Bairro: "",
    RuaAv: "",
    Numero: "",
    Complemento: "",
  };

  const [Steps, setSteps] = useState<number>(0);
  const [Error, setError] = useState<string>("");
  const [data, setData] = useState<DataInputs>(dataInputs);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [TextButton, setTextButton] = useState<boolean>(false);

  const fetchCepData = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { cidade, bairro, logradouro } = response.data;

      setData((prev) => ({
        ...prev,
        Cidade: cidade || "",
        Bairro: bairro || "",
        RuaAv: logradouro || "",
      }));
    } catch (error) {
      console.error("Erro ao buscar dados do CEP:", error);
    }
  };

  const handlerUpdateData = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handlerNextStep = async (Steps: number) => {
    setTextButton(false);
    if (Steps === 0) {
      if (data.Email !== "" && data.Cep !== "" && data.Tell !== "") {
        if (Steps >= 0 && Steps < 3) {
          if (data.Cep) {
            await fetchCepData(data.Cep);
          }
          setSteps(Steps + 1);
        } else {
          console.log("// max //");
        }
      } else {
        setError(getIdentificationError());
      }
    } else if (Steps === 1) {
      if (
        data.Bairro !== "" &&
        data.RuaAv !== "" &&
        data.Numero !== "" &&
        data.Cidade !== ""
      ) {
        if (Steps >= 0 && Steps < 3) {
          setSteps(Steps + 1);
        } else {
          console.log("// max //");
        }
      } else {
        setError(getEnderecoError());
      }
    } else if (Steps === 2) {
      if (Steps >= 0 && Steps < 3) {
        setTextButton(true);
        setSteps(Steps + 1);
      } else {
        console.log("// max //");
      }
    } else if (Steps === 3) {
      await handlerArrumaTudo();
      router.push(`/pages/finalizacao?valor=${valor}`); // Atualiza a URL ao finalizar
    }
  };

  const handlerBackStep = () => {
    setTextButton(false);
    if (Steps > 0 && Steps <= 3) {
      setSteps(Steps - 1);
    } else {
      console.log("ruim");
    }
  };

  const getIdentificationError = () => {
    if (data.Email === "" && data.Cep === "" && data.Tell === "")
      return "Identificação | All";
    if (data.Email === "" && data.Cep === "")
      return "Identificação | Email Cep";
    if (data.Email === "" && data.Tell === "")
      return "Identificação | Email Tell";
    if (data.Cep === "" && data.Tell === "") return "Identificação | Cep Tell";
    if (data.Email === "") return "Identificação | Email";
    if (data.Cep === "") return "Identificação | Cep";
    if (data.Tell === "") return "Identificação | Tell";
    return "";
  };

  const getEnderecoError = () => {
    if (
      data.Bairro !== "" &&
      data.RuaAv !== "" &&
      data.Numero !== "" &&
      data.Cidade !== ""
    )
      return "Endereco | All";
    if (data.Bairro === "" && data.RuaAv === "")
      return "Endereco | Bairro RuaAv";
    if (data.Bairro === "" && data.Numero === "")
      return "Endereco | Bairro Numero";
    if (data.Bairro === "" && data.Cidade === "")
      return "Endereco | Bairro Cidade";
    if (data.RuaAv === "" && data.Cidade === "")
      return "Endereco | RuaAv Cidade";
    if (data.RuaAv === "" && data.Numero === "")
      return "Endereco | RuaAv Numero";
    if (data.Cidade === "" && data.Numero === "")
      return "Endereco | Cidade Numero";
    if (data.Cidade === "") return "Endereco | Cidade";
    if (data.RuaAv === "") return "Endereco | RuaAv";
    if (data.Bairro === "") return "Endereco | Bairro";
    if (data.Numero === "") return "Endereco | Numero";
    return "";
  };

  const fromComponents = [
    <Identificacao
      key='Identificacao'
      data={data}
      handlerUpdateData={handlerUpdateData}
      Error={Error}
    />,
    <Endereco
      key='endereco'
      data={data}
      handlerUpdateData={handlerUpdateData}
      Error={Error}
    />,
    <Pagamento key='pagamento' valor={valor || ""} />,
    <CheckUp key='checkup' data={data} handlerUpdateData={handlerUpdateData} />,
  ];

  const idAleatorio = () => {
    const id = Math.floor(10000 + Math.random() * 90000);
    return id.toString();
  };

  const datacompra = getFormattedDate();

  const firstName = useFirstName();
  const emailverificacao = useUserEmail() || "Nao Informado";

  const handlerArrumaTudo = async () => {
    setIsLoading(true);
    const id = idAleatorio();
    const itens = newCartbags.map((bag) => bag.produto).join(", ");
    const quantidade = newCartbags
      .map((bag) => bag.quantidade)
      .join(", ")
      .toString();

    console.log({
      id: id,
      email: data.Email,
      telefone: data.Tell,
      instagram: data.Instagram,
      bairro: data.Bairro,
      rua: data.RuaAv,
      complemento: data.Complemento,
      numero: data.Numero,
      cep: data.Cep,
      cidade: data.Cidade,
      itens: itens,
      quantidade: quantidade,
      datacompra: datacompra,
      emailverificacao: emailverificacao,
    });

    await insertBD({
      id: id,
      email: data.Email,
      telefone: data.Tell,
      instagram: data.Instagram,
      bairro: data.Bairro,
      rua: data.RuaAv,
      complemento: data.Complemento,
      nurmo: data.Numero,
      cep: data.Cep,
      cidade: data.Cidade,
      itens: itens,
      quantidade: quantidade,
      datacompra: datacompra,
      atendido: false,
      emailverificacao: emailverificacao,
    });

    await sendEmailCompra({
      subtitulo: "Teko Bag",
      email: data.Email,
      instagram: data.Instagram,
      nome: `${firstName}`, // nome vindo do clerk
    });

    await sendEmailCompraCliente({
      subtitulo: "Teko Bag",
      email: data.Email,
      instagram: data.Instagram,
      nome: `${firstName}`, // nome vindo do clerk
    });

    setIsLoading(false);
    clearCart();
  };

  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justify-center pt-8 bg-zinc-200 transition-all`}
    >
      <div className='barlow'>
        <div className='flex flex-col justify-center space-y-10'>
          <div className='text-center'>
            <div className='font-bold text-5xl text-zinc-700'>
              Finalize sua compra
            </div>
            <div className='font-semibold text-lg text-zinc-500/80'>
              Siga as etapas a seguir para terminar o pedido de sua nova teko
              bag.
            </div>
          </div>

          <div className='w-[1000px] h-[740px] bg-zinc-100 shadow-2xl rounded flex flex-col items-center'>
            <div className='flex mt-10 relative gap-16'>
              <div className='absolute top-[40%] left-1/2 translate-x-[-50%] w-[520px] h-[1px] border border-zinc-600'></div>
              <div
                className='w-[110px] flex flex-col items-center bg-zinc-100'
                style={{ zIndex: 2 }}
              >
                <div>
                  <User
                    size={40}
                    weight='regular'
                    color={Steps >= 0 ? "#7D7CD4" : "black"}
                  />
                </div>
                <div>Identificação</div>
              </div>
              <div
                className='w-[110px] flex flex-col items-center bg-zinc-100'
                style={{ zIndex: 2 }}
              >
                <div>
                  <MapPinLine
                    size={40}
                    weight='regular'
                    color={Steps >= 1 ? "#7D7CD4" : "black"}
                  />
                </div>
                <div>Endereço</div>
              </div>
              <div
                className='w-[110px] flex flex-col items-center bg-zinc-100'
                style={{ zIndex: 2 }}
              >
                <div>
                  <CurrencyCircleDollar
                    size={40}
                    weight='regular'
                    color={Steps >= 2 ? "#7D7CD4" : "black"}
                  />
                </div>
                <div>Pagamento</div>
              </div>
              <div
                className='w-[110px] flex flex-col items-center bg-zinc-100'
                style={{ zIndex: 2 }}
              >
                <div>
                  <Star
                    size={40}
                    weight='regular'
                    color={Steps >= 3 ? "#7D7CD4" : "black"}
                  />
                </div>
                <div>Chek-up</div>
              </div>
            </div>

            <div className='flex-1'>{fromComponents[Steps]}</div>

            <div className='w-full flex space-x-3 my-4 mr-8 justify-end'>
              <button
                type='button'
                onClick={handlerBackStep}
                className='flex items-center space-x-2 text-lg bg-zinc-300/70 hover:bg-zinc-300 transition-all shadow rounded p-2 '
              >
                <CaretLeft size={20} weight='regular' /> Voltar
              </button>
              <button
                type='submit'
                onClick={() => handlerNextStep(Steps)}
                className='flex items-center space-x-2 text-lg bg-zinc-300/70 hover:bg-zinc-300 transition-all shadow rounded p-2 text-center'
              >
                {isLoading
                  ? "Fazendo..."
                  : TextButton
                  ? "Finalizar"
                  : "Avançar"}
                <CaretRight size={20} weight='regular' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
