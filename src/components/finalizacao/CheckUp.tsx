import React from "react";
import { DataInputs } from "@/types/DataInput";

interface CheckUpProps {
  data: DataInputs;
  handlerUpdateData: (key: string, value: string) => void;
}
export default function CheckUp({ data, handlerUpdateData }: CheckUpProps) {
  return <div>Check-Up</div>;
}
