import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import VitrineDivisoriaFinalizar from "./VitrineDivisoriaFinalizar";
import { Dados } from "@/lib/confirmarDados";
import { newCartbags } from "@/lib/bags";

interface VitrineConfirmarDadosProps {
  onclick: () => void;
  onclick2: () => void;
  setDesconto: (value: boolean) => void;
}

const VitrineConfirmarDados: React.FC<VitrineConfirmarDadosProps> = ({
  onclick,
  onclick2,
  setDesconto,
}) => {
  const [instagram, setInstagram] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [cupomInput, setCupomInput] = useState("");
  const [corCidade, setCorCidade] = useState(false);

  useEffect(() => {
    // Verifica se todos os campos estão preenchidos
    const filled =
      instagram !== "" &&
      email !== "" &&
      telefone !== "" &&
      bairro !== "" &&
      rua !== "" &&
      numero !== "" &&
      cep !== "" &&
      cidade !== "" &&
      corCidade;

    setIsFormFilled(filled);
  }, [
    instagram,
    email,
    telefone,
    bairro,
    rua,
    complemento,
    numero,
    cep,
    cidade,
    corCidade,
  ]);

  const [isFormFilled, setIsFormFilled] = useState(false);

  // input do instagram
  const handleFocus = () => {
    if (!instagram.includes("@")) {
      setInstagram("@");
    }
  };

  const handleBlur = () => {
    if (instagram === "@") {
      setInstagram("");
    }
  };

  const handleCupomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCupom = e.target.value.replace(/\s+/g, "").toUpperCase();
    console.log(newCupom);
    setCupomInput(newCupom);
    if (newCupom === "TEKOTEKO") {
      setDesconto(true);
    } else {
      setDesconto(false);
    }
  };

  const handleAvancarClick = () => {
    const data = {
      instagram,
      email,
      telefone,
      bairro,
      rua,
      complemento,
      numero,
      cep,
      cidade,
    };

    Dados.push(data);
    console.log(cupomInput);
    console.log("///////////////");
    console.log(Dados);

    onclick2();
  };

  return (
    <div className='flex flex-col h-full overflow-y-auto'>
      <div className='flex items-center mb-4'>
        <button onClick={onclick}>
          <ArrowLeft size={32} />
        </button>
        <div className='text-2xl font-bold ml-2'>Dados</div>
      </div>

      <form className='flex-1 flex-col'>
        <input
          type='text'
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder='@ do Instagram'
          className='w-full bg-transparent rounded border border-black py-2 px-2 mt-6 mb-2 text-black font-semibold'
        />

        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email para contato'
          className='w-full bg-transparent rounded border border-black py-2 px-2 mt-2 mb-4 text-black font-semibold'
        />

        <input
          type='text'
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder='Telefone para contato'
          className='w-full bg-transparent rounded border border-black py-2 px-2 mt-2 mb-4 text-black font-semibold'
        />

        <div className='w-[90%] mx-auto'>
          <VitrineDivisoriaFinalizar />
        </div>

        <div className='flex space-x-2'>
          <input
            type='text'
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            placeholder='Bairro'
            className='w-full bg-transparent rounded border border-black py-2 px-2 mt-6 text-black font-semibold'
          />
          <input
            type='text'
            value={rua}
            onChange={(e) => setRua(e.target.value)}
            placeholder='Rua / Av'
            className='w-1/2 bg-transparent rounded border border-black py-2 px-2 mt-6 text-black font-semibold'
          />
        </div>

        <div className='flex space-x-2'>
          <input
            type='text'
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            placeholder='Complemento'
            className='w-1/2 bg-transparent rounded border border-black py-2 px-2 mt-6 text-black font-semibold'
          />
          <input
            type='text'
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            placeholder='Número'
            className='w-1/2 bg-transparent rounded border border-black py-2 px-2 mt-6 text-black font-semibold'
          />
        </div>

        <div className='flex space-x-2'>
          <select
            id='cidadeSelect'
            value={cidade}
            onChange={(e) => {
              setCidade(e.target.value);
              setCorCidade(e.target.value !== "");
            }}
            className='w-[60%] bg-transparent rounded border border-black py-2 px-2 mt-6 font-semibold'
            style={{ color: corCidade ? "black" : "#939DAC" }}
          >
            <option value=''>Escolha uma cidade</option>
            <option value='Taubaté'>Taubaté</option>
            <option value='Pindamonhangaba'>Pindamonhangaba</option>
            <option value='Tremembé'>Tremembé</option>
            <option value='Caçapava'>Caçapava</option>
            <option value='Sao jose dos campos'>São José dos Campos</option>
          </select>

          <input
            type='text'
            value={cep}
            onChange={(e) =>
              setCep(e.target.value.replace(/\D/g, "").slice(0, 9))
            }
            placeholder='Cep'
            className='w-[40%] bg-transparent rounded border border-black py-2 px-2 mt-6 text-black font-semibold'
          />
        </div>
        <div className='w-[90%] mx-auto mt-5 '>
          <VitrineDivisoriaFinalizar />
        </div>

        <div className='mb-4'>
          <input
            type='text'
            value={cupomInput}
            onChange={handleCupomChange}
            placeholder='Cupom de desconto'
            className='w-full bg-transparent rounded border border-black py-2 px-2 mt-6 mb-12 text-black font-semibold'
          />
          {cupomInput === "TEKOTEKO" && (
            <div className='text-green-600 font-bold'>
              Cupom válido! Desconto aplicado.
            </div>
          )}
        </div>

        <button
          type='button' // Defina explicitamente o tipo como "button"
          className={`w-full py-2 mb-2 border border-black hover:bg-dourado font-semibold rounded mt-2 uppercase absolute bottom-1 ${
            !isFormFilled && "opacity-50 cursor-not-allowed"
          }`}
          onClick={isFormFilled ? handleAvancarClick : undefined}
          disabled={!isFormFilled}
        >
          Avançar
        </button>
      </form>
    </div>
  );
};

export default VitrineConfirmarDados;
