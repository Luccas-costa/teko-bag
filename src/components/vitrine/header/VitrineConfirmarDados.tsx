import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import VitrineDivisoriaFinalizar from "./VitrineDivisoriaFinalizar";

interface VitrineConfirmarDadosProps {
  onclick: () => void;
  onclick2: () => void;
  setDesconto: (value: boolean) => void;
}

export default function VitrineConfirmarDados({
  onclick,
  onclick2,
  setDesconto,
}: VitrineConfirmarDadosProps) {
  const [value, setValue] = useState("");
  const [cep, setCep] = useState("");
  const [corCidade, setCorCidade] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [cupomInput, setCupomInput] = useState("");
  const cupom = "TEKOTEKO";

  useEffect(() => {
    // Verifica se todos os campos estão preenchidos
    setIsFormFilled(!!value && !!cep && corCidade);
  }, [value, cep, corCidade]);

  // input do instagram
  const handleFocus = () => {
    if (!value.includes("@")) {
      setValue("@");
    }
  };

  const handleBlur = () => {
    if (value === "@") {
      setValue("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    // Substitui duas ocorrências consecutivas de @ por uma única ocorrência
    if (newValue.includes("@@")) {
      newValue = newValue.replace(/@@/g, "@");
    }
    setValue(newValue);
  };

  // Função para formatar o CEP
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCep = e.target.value.replace(/\D/g, ""); // Remove tudo que não for dígito
    if (newCep.length > 5) {
      newCep = newCep.slice(0, 5) + "-" + newCep.slice(5, 8);
    }
    if (newCep.length > 9) {
      newCep = newCep.slice(0, 9); // Limita a 9 caracteres (8 dígitos + 1 hífen)
    }
    setCep(newCep);
  };

  const handleCupomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCupom = e.target.value.replace(/\s+/g, "").toUpperCase();
    setCupomInput(newCupom);
    setDesconto(newCupom === cupom);
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center mb-4'>
        <button onClick={onclick}>
          <ArrowLeft size={32} />
        </button>
        <div className='text-2xl font-bold ml-2'>Dados</div>
      </div>

      <form className='flex-1 flex-col'>
        <input
          type='text'
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder='@ do Instagram'
          className='w-full bg-transparent rounded border border-black py-2 px-2 mt-6 mb-4 text-black font-semibold'
        />

        <div className='w-[90%] mx-auto'>
          <VitrineDivisoriaFinalizar />
        </div>

        <div className='flex space-x-2'>
          <input
            type='text'
            placeholder='Bairro'
            className='w-full bg-transparent rounded border border-black py-2 px-2 mt-6 text-black font-semibold'
          />
          <input
            type='text'
            placeholder='Rua / Av'
            className='w-1/2 bg-transparent rounded border border-black py-2 px-2 mt-6 text-black font-semibold'
          />
        </div>

        <div className='flex space-x-2'>
          <input
            type='text'
            placeholder='Complemento'
            className='w-1/2 bg-transparent rounded border border-black py-2 px-2 mt-6 text-black font-semibold'
          />
          <input
            type='text'
            placeholder='Número'
            className='w-1/2 bg-transparent rounded border border-black py-2 px-2 mt-6 text-black font-semibold'
          />
        </div>

        <div className='flex space-x-2'>
          <select
            id='cidadeSelect'
            className='w-[60%] bg-transparent rounded border border-black py-2 px-2 mt-6 font-semibold'
            onChange={(e) => setCorCidade(e.target.value !== "")}
            style={{ color: corCidade ? "black" : "#939DAC" }}
          >
            <option value='' disabled selected>
              Escolha uma cidade
            </option>
            <option value='Taubaté'>Taubaté</option>
            <option value='Pindamonhangaba'>Pindamonhangaba</option>
            <option value='Tremembé'>Tremembé</option>
            <option value='Caçapava'>Caçapava</option>
            <option value='Sao jose dos campos'>São José dos Campos</option>
          </select>

          <input
            type='text'
            placeholder='Cep'
            value={cep}
            onChange={handleCepChange}
            className='w-[40%] bg-transparent rounded border border-black py-2 px-2 mt-6 text-black font-semibold'
          />
        </div>
        <div className='w-[90%] mx-auto mt-5 '>
          <VitrineDivisoriaFinalizar />
        </div>

        <div className='mb-4'>
          <input
            type='text'
            placeholder='Cupom de desconto'
            value={cupomInput}
            onChange={handleCupomChange}
            className='w-full bg-transparent rounded border border-black py-2 px-2 mt-6  text-black font-semibold'
          />
          {cupomInput === cupom && (
            <div className='text-green-600 font-bold'>
              Cupom válido! Desconto aplicado.
            </div>
          )}
        </div>
      </form>

      <button
        className={`w-full py-2 mb-2 border border-black hover:bg-vsand font-semibold rounded mt-2 uppercase ${
          !isFormFilled && "opacity-50 cursor-not-allowed"
        }`}
        onClick={isFormFilled ? onclick2 : undefined}
        disabled={!isFormFilled}
      >
        Avançar
      </button>
    </div>
  );
}
