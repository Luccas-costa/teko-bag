import type { Metadata } from "next";
import styles from "./dashboard.module.css";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teko Bag | Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body className={` ${inter.className} ${styles.todo}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
