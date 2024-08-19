import React from "react";
import { DataInputs } from "@/types/DataInput";

interface PagamentoProps {
  data: DataInputs;
  handlerUpdateData: (key: string, value: string) => void;
}
export default function Pagamento({ data, handlerUpdateData }: PagamentoProps) {
  return <div>Pagamento</div>;
}
