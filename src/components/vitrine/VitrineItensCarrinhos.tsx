import React from "react";
import Image from "next/image";

import { Plus } from "lucide-react";
import { Trash } from "@phosphor-icons/react/dist/ssr";

export default function VitrineItensCarrinhos() {
  return (
    <div className='w-90% border border-zinc-950 py-2 flex space-x-2 items-center relative'>
      <div className='w-[30%]'>
        <Image
          src='/skeleton.png'
          width={100}
          height={100}
          alt=''
          className='border border-zinc-950 ml-4'
        />
      </div>
      <div className='flex flex-col items-end w-[70%] mr-2  pr-2 md:pr-4 '>
        <div className='text-lg menuxm2:text-xl font-semibold truncate w-[90%] text-end'>
          produtos
        </div>
        <div className='text-sm menuxm2:text-md font-semibold truncate w-[90%] text-end'>
          quantidade produtos aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <div className='text-md menuxm2:text-lg font-bold pr-2 truncate w-[90%] text-end'>
          R$ 89,99
        </div>
      </div>
      <div className='absolute right-4 top-[-14px] md:top-[-17px] w-16 h-[1.4rem]  md:w-24 md:h-[1.8rem] bg-green-600 border border-zinc-950 flex items-center justify-evenly'>
        <button>
          <Trash size={20} weight='bold' />
        </button>
        <hr className='mx-1 h-[80%] w-[1px] rounded  border-black bg-black rotate-[90] ' />
        <button>
          <Plus size={23} />
        </button>
      </div>
    </div>
  );
}
