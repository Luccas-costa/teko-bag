"use client";

import React from "react";
Link;

import { AdmUsers } from "@/lib/admEmail";
import { useUserEmail } from "@/hooks/useUserEmail";

import DashboardHeader from "@/components/dashboard/header/DashboardHeader";
import DashboardMain from "@/components/dashboard/main/DashboardMain";
import DashboardPesquisar from "@/components/dashboard/pesquisar/DashboardPesquisar";
import Link from "next/link";

export default function Page() {
  const userEmail = useUserEmail();

  return (
    <>
      {userEmail && AdmUsers.includes(userEmail) ? (
        <div className='w-full h-full flex flex-col px-12 py-4 bg-neutral-900'>
          <DashboardHeader />
          <DashboardPesquisar />
          <DashboardMain />
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
