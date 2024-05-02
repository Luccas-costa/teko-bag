import React from "react";

export default function Time() {
  return (
    <div className='text-zinc-600 font-semibold flex flex-col flex-nowrap items-start'>
      <h1 className='text-lg'>~Time~</h1>
      <div>
        <ul>
          <li className='lg:text-base md:text-sm text-xs'>
            <strong>Mentor:</strong> Patrick
          </li>
          <li className='lg:text-base md:text-sm text-xs'>
            <strong>CEO:</strong> Ana Clara
          </li>
          <li className='lg:text-base md:text-sm text-xs'>
            <strong>Diretor financeiro:</strong> Ana Luiza
          </li>
          <li className='lg:text-base md:text-sm text-xs'>
            <strong>Diretores administrativo:</strong> Lauren e Sarah
          </li>
          <li className='lg:text-base md:text-sm text-xs'>
            <strong>Marketing - produto/serviço:</strong> Laís,João, kallan,
            lucas ,kevin ,pedro,juan
          </li>
          <li className='lg:text-base md:text-sm text-xs'>
            <strong>Marketing - marca/comunicação:</strong> Ana Julia, Lucena
          </li>
        </ul>
      </div>
    </div>
  );
}
