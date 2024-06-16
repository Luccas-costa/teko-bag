import React from "react";

import DashboardCFuncoes from "./DashboardCFuncoes";
import DashboardFuncoes from "./DashboardFuncoes";

export default function DashboardMain() {
  return (
    <div className='h-[100vh] w-[98.4%] border border-zinc-600 rounded-lg mt-4 ml-3 shadow-lg shadow-zinc-900 flex flex-col'>
      <DashboardCFuncoes />
      <div className='flex-1 flex justify-center items-center'></div>
      <DashboardFuncoes />
    </div>
  );
}
