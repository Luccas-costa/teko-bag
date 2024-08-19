"use client";
import React, { useState } from "react";

import "../../globals.css";
import CheckUp from "@/components/finalizacao/CheckUp";
import Endereco from "@/components/finalizacao/Endereco";
import Pagamento from "@/components/finalizacao/Pagamento";
import Identificacao from "@/components/finalizacao/Identificacao";
import { DataInputs } from "@/types/DataInput";

import {
  User,
  Star,
  MapPinLine,
  CurrencyCircleDollar,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";

export default function Finalizacao() {
  const dataInputs = {
    name: "",
    email: "",
    teste: "",
  };

  const [Steps, setSteps] = useState<number>(0);
  const [data, setData] = useState<DataInputs>(dataInputs);

  const handlerUpdateData = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handlerNextStep = () => {
    if (Steps >= 0 && Steps < 3) {
      setSteps(Steps + 1);
    } else {
      console.log("ruim");
    }
  };
  const handlerBackStep = () => {
    if (Steps > 0 && Steps <= 3) {
      setSteps(Steps - 1);
    } else {
      console.log("ruim");
    }
  };

  const fromComponents = [
    <Identificacao
      key='Identificacao'
      data={data}
      handlerUpdateData={handlerUpdateData}
    />,
    <Endereco
      key='endereco'
      data={data}
      handlerUpdateData={handlerUpdateData}
    />,
    <Pagamento
      key='pagamento'
      data={data}
      handlerUpdateData={handlerUpdateData}
    />,
    <CheckUp key='checkup' data={data} handlerUpdateData={handlerUpdateData} />,
  ];
  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justyfy-center pt-8 bg-zinc-200 transition-all`}
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
                onClick={handlerNextStep}
                className='flex items-center space-x-2 text-lg bg-zinc-300/70 hover:bg-zinc-300 transition-all shadow rounded p-2 '
              >
                Avançar <CaretRight size={20} weight='regular' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
