import React, { useState } from "react";
import { clients } from "../../../lib/clientes";

import DashboardCFuncoes from "./DashboardCFuncoes";
import DashboardFuncoes from "./DashboardFuncoes";
import DashboardClientes from "./DashboardClientes";

interface DashboardMainProps {
  searchTerm: string;
}

export default function DashboardMain({ searchTerm }: DashboardMainProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 8;

  const filteredClients = clients.filter(client =>
    client.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);
  const displayedClients = filteredClients.slice((currentPage - 1) * clientsPerPage, currentPage * clientsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className='h-[720px] w-[98.4%] border border-zinc-600 rounded-lg mt-4 ml-3 shadow-lg shadow-zinc-900 flex flex-col'>
      <DashboardCFuncoes />
      <div className='flex-1 flex flex-col overflow-auto'>
        {displayedClients.map(client => (
          <DashboardClientes key={client.id} {...client} />
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
