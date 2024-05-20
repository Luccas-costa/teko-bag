import React from 'react'
import Image from 'next/image'
import { Plus, Trash } from 'lucide-react'

export default function VitrineItensCarrinhos() {
  return (
    <div className='w-90% border border-zinc-950 py-2 flex space-x-2 items-center relative'>
        <div><Image src='/logo-transparente.png' width={100} height={100} alt='' className='border border-zinc-950 ml-4' /></div> 
        <div className='flex flex-col items-end w-full mr-2 pr-4'>
            <div className='text-xl font-semibold'>produtos</div>
            <div className='text-md font-semibold'>quantidade produtos</div>
            <div className='text-lg font-bold pr-2'>R$ 89,99</div>
        </div>
        <div className='absolute right-4 top-[-17px] w-16 h-6 bg-green-600 border border-zinc-950 flex items-center justify-center'>
          <button><Trash size={20}/></button>
          <hr className='mx-1 h-[80%] w-[1px] rounded  border-black bg-black rotate-[90] '/>
          <button><Plus size={20}/></button>
        </div>
    </div>
  )
}
