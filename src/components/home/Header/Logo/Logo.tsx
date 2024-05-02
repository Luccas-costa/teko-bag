import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src='/logo-transparente.png' width={50} height={50} alt='logo' />
    </div>
  );
}
