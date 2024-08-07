import Link from "next/link";
import React from "react";

export default function DashboardEnterInsert() {
  return (
    <Link
      href='/pages/dashboard/cadastros'
      className='bg-green1/50 rounded px-3 py-2 items-center font-bold mt-12 w-[90vw] mx-auto text-center'
    >
      Ir para Cadastross
    </Link>
  );
}
