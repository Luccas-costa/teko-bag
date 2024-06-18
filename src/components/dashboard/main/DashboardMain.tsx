import React, { useState } from "react";
import { clients } from "../../../lib/clientes";
import dayjs from "dayjs";

import DashboardCFuncoes from "./DashboardCFuncoes";
import DashboardFuncoes from "./DashboardFuncoes";
import DashboardClientes from "./DashboardClientes";

interface DashboardMainProps {
  searchTerm: string;
}

export default function DashboardMain({ searchTerm }: DashboardMainProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [openClientId, setOpenClientId] = useState<string | null>(null);
  const clientsPerPage = 8;

  // Filtra os clientes com base no termo de busca
  const filteredClients = clients.filter(
    (client) =>
      client.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordena os clientes pela data de compra, do mais novo para o mais antigo
  const sortedClients = filteredClients.sort((a, b) => {
    return dayjs(b.dataCompra).diff(dayjs(a.dataCompra));
  });

  const totalPages = Math.ceil(sortedClients.length / clientsPerPage);
  const displayedClients = sortedClients.slice(
    (currentPage - 1) * clientsPerPage,
    currentPage * clientsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className='h-[720px] w-[98.4%] border border-zinc-600 rounded-lg mt-4 ml-3 shadow-lg shadow-zinc-900 flex flex-col'>
      <DashboardCFuncoes />
      <div className='flex-1 flex flex-col overflow-auto'>
        {displayedClients.map((client) => (
          <DashboardClientes
            key={client.id}
            {...client}
            isOpen={openClientId === client.id}
            onToggle={() => setOpenClientId(openClientId === client.id ? null : client.id)}
          />
        ))}
      </div>
      <DashboardFuncoes
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
