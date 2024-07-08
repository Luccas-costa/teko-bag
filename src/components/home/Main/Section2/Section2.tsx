import React from "react";
import Cards from "./Cards/Cards";

export default function Section2() {
  return (
    <div className='flex flex-col bg-darkgreen w-full h-full' id='impacto'>
      <div className='pl-14 pr-14 pb-28'>
        <div className='flex flex-col 2xl:mt-16 xl:mt-12 md:mt-10 sm:mt-8 mt-6'>
          <div className='text-5xl font-bold text-white text-center'>
            Nosso impacto
          </div>
          <span className='text-xl text-gray-400 text-center'>
            Salvando nosso Planeta
          </span>
        </div>

        <div className='flex flex-wrap justify-evenly items-center gap-12 mt-12'>
          <Cards
            image='/teste1.png'
            title='Produtos escolhidos a mão'
            description='Melhor qualidade no seu serviço'
          />
          <Cards
            image='/teste2.png'
            title='Produtos voltados à saúde '
            titleaposbr='e bem estar'
            description='Maior conforto e praticidade'
          />
          <Cards
            image='/teste3.png'
            title='Uma peça única para sua '
            titleaposbr='Moda Style'
            description='Estampas criativas escolhidas pelo '
            descriptionaposbr='nosso time'
          />
        </div>
      </div>
    </div>
  );
}
