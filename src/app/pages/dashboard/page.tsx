"use client";
import React from "react";
import { useUserEmail } from "@/hooks/useUserEmail";

export default function Page() {
  const userEmail = useUserEmail();

  return (
    <div>
      <h1>{userEmail ? userEmail : "Email não encontrado"}</h1>
    </div>
  );
}
