import React from 'react'
import Image from 'next/image'

export default function VitrineItensCarrinhos() {
  return (
    <div className='w-90% border border-zinc-950 py-4 flex space-x-2 items-center'>
        <div><Image src='/logo-transparente.png' width={90} height={90} alt='' className='border border-zinc-950 ml-4' /></div> 
        <div className='flex flex-col items-end w-full mr-2 pr-2'>
            <div className='text-xl'>produtos</div>
            <div className='text-md'>quantidade produtos</div>
            <div className='text-lg font-bold'>preço 08908</div>
        </div>

    </div>
  )
}
