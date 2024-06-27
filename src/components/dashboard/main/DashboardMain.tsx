import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Client } from "@/types/Client";
import { SearchBD } from "@/utils/searchBD";
import DashboardCFuncoes from "./DashboardCFuncoes";
import DashboardFuncoes from "./DashboardFuncoes";
import DashboardClientes from "./DashboardClientes";

interface DashboardMainProps {
  searchTerm: string;
}

export default function DashboardMain({ searchTerm }: DashboardMainProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openClientId, setOpenClientId] = useState<string | null>(null);
  const clientsPerPage = 8;

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await SearchBD();
        console.log("Dados buscados do banco de dados:", data);
        setClients(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchClients();
  }, []);

  // Formate as datas ao buscar os clientes
  const formattedClients = clients.map((client) => ({
    ...client,
    dataCompraFormatted: dayjs(client.dataCompra).format("YYYY-MM-DD HH:mm:ss"),
  }));
  console.log("Clientes formatados:", formattedClients);

  // Filtra os clientes com base no termo de busca
  const filteredClients = formattedClients.filter(
    (client) =>
      client.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("Clientes filtrados:", filteredClients);

  // Ordena os clientes do mais recente ao mais antigo
  const sortedClients = filteredClients.sort((a, b) => {
    const diff = dayjs(b.dataCompra).diff(dayjs(a.dataCompra));
    console.log(`Comparando ${b.nome} (${b.dataCompra}) com ${a.nome} (${a.dataCompra}): ${diff}`);
    return diff;
  });
  console.log("Clientes ordenados:", sortedClients);

  // Calcula o número total de páginas
  const totalPages = Math.ceil(sortedClients.length / clientsPerPage);

  // Obtém os clientes a serem exibidos na página atual
  const displayedClients = sortedClients.slice(
    (currentPage - 1) * clientsPerPage,
    currentPage * clientsPerPage
  );
  console.log("Clientes exibidos na página atual:", displayedClients);

  // Manipula a mudança de página
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
            dataEntrada={client.dataCompraFormatted} // Use a data formatada aqui
            isOpen={openClientId === client.id}
            onToggle={() =>
              setOpenClientId(openClientId === client.id ? null : client.id)
            }
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
