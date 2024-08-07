"use client";

import Link from "next/link";
import React, { useState } from "react";

import { AdmUsers } from "@/lib/admEmail";
import { useUserEmail } from "@/hooks/useUserEmail";

import DashboardHeader from "@/components/dashboard/header/DashboardHeader";
import DashboardMain from "@/components/dashboard/main/DashboardMain";
import DashboardPesquisar from "@/components/dashboard/pesquisar/DashboardPesquisar";
import DashboardExit from "@/components/dashboard/DashboardExit";
import DashboardEnterInsert from "@/components/dashboard/DashboardEnterInsert";

export default function Page() {
  const userEmail = useUserEmail();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      {userEmail && AdmUsers.includes(userEmail) ? (
        <div className='w-full h-full flex flex-col dash7:px-12 dash8:pl-[1rem] dash8_5:pl-[1rem] dash8:pr-[1.8rem] dash8_5:pr-[1.8rem] dash9:pr-[0.8rem] dash10:pr-[0.9rem] dash10_5:pr-[0.9rem] py-4 bg-neutral-900 pb-5'>
          <DashboardHeader />
          <DashboardPesquisar onSearch={handleSearch} />
          <DashboardMain searchTerm={searchTerm} />
          <DashboardEnterInsert />
          <DashboardExit />
        </div>
      ) : (
        <div className='h-[80vh] flex flex-col justify-center items-center space-y-2'>
          <div className='text-center text-3xl'>Acesso Negado</div>
          <Link href='/' className='text-xl border border-black px-2 py-1'>
            Voltar a Home
          </Link>
        </div>
      )}
    </>
  );
}
