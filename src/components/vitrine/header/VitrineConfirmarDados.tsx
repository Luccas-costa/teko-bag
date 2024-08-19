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
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    // Verifica se todos os campos obrigatórios estão preenchidos
    const filled =
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

  // Função para formatar o telefone
  const formatarTelefone = (inputTelefone: string) => {
    // Remove todos os caracteres não numéricos
    let telefoneFormatado = inputTelefone.replace(/\D/g, "");
    // Verifica se o telefone está vazio
    if (telefoneFormatado.length === 0) {
      return "";
    } else if (telefoneFormatado.length <= 4) {
      // Se tiver até quatro dígitos, apenas adiciona o código do país
      telefoneFormatado = `(${telefoneFormatado}`;
    } else if (telefoneFormatado.length <= 10) {
      // Se tiver até dez dígitos, formata com o código do país, o DDD e os primeiros dígitos
      telefoneFormatado = `(${telefoneFormatado.slice(
        0,
        2
      )}) ${telefoneFormatado.slice(2, 4)} ${telefoneFormatado.slice(4)}`;
    } else {
      // Formata o telefone completo com o código do país, DDD, primeiros dígitos e separa o último grupo
      telefoneFormatado = `(${telefoneFormatado.slice(
        0,
        2
      )}) ${telefoneFormatado.slice(2, 4)} ${telefoneFormatado.slice(
        4,
        9
      )} ${telefoneFormatado.slice(9)}`;
    }

    return telefoneFormatado;
  };
  // Handler para o evento onChange do input de telefone

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorDigitado = e.target.value;
    const telefoneFormatado = formatarTelefone(valorDigitado);
    setTelefone(telefoneFormatado);
  };

  const handleFocus = () => {
    if (!instagram.includes("@")) {
      setInstagram("@");
    }
  };

  const handleFocusTell = () => {
    if (!telefone.includes("55")) {
      setTelefone("(55) ");
    }
  };

  const handleBlur = () => {
    if (instagram === "@") {
      setInstagram("");
    }
  };

  const handleBlurTell = () => {
    if (telefone === "(55) ") {
      setTelefone("");
    }
  };

  const handleCupomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCupom = e.target.value.replace(/\s+/g, "").toUpperCase();
    setCupomInput(newCupom);
    setDesconto(newCupom === "TEKOTEKO");
  };

  const handleAvancarClick = () => {
    // Se o Instagram estiver vazio, defina como "Não Informado"
    const instagramValue =
      instagram.trim() === "" ? "Não Informado" : instagram;

    const data = {
      instagram: instagramValue,
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
          onChange={handleTelefoneChange}
          onBlur={handleBlurTell}
          onFocus={handleFocusTell}
          placeholder='Telefone para contato (55) XX XXXXX XXXX'
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
            className={`w-full bg-transparent rounded border border-black py-2 px-2 mt-6 ${
              cupomInput === "TEKOTEKO" ? "mb-0" : "mb-12"
            } text-black font-semibold`}
          />
          {cupomInput === "TEKOTEKO" && (
            <div className='text-green-600 font-bold mb-12'>
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
