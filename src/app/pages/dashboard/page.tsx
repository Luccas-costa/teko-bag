"use client";

import React from "react";

import { useUserEmail } from "@/hooks/useUserEmail";

import DashboardHeader from "@/components/dashboard/header/dashboardHeader";
import DashboardMain from "@/components/dashboard/main/dashboardMain";
import DashboardFooter from "@/components/dashboard/footer/dashboardFooter";

export default function Page() {
  const userEmail = useUserEmail();

  return (
    <div>
      <DashboardHeader />
      <DashboardMain />
      <DashboardFooter />
    </div>
  );
}
