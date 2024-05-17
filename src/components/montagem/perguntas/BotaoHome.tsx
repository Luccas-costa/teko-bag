import React from "react";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export default function BotaoHome() {
    return (
        <Link href='/' className="text-semibold flex items-center gap-2 absolute bottom-0 left-0 m-10 bg-banner4 px-3 py-2 rounded"><ArrowLeft size={25}/> <div>Voltar a home</div></Link>
    ) 
}