import type { Metadata } from "next";
import { Nunito } from "next/font/google";


import { Header } from "@/components/header/Header";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codarse - Página Inicial",
  description: "Desenvolvimento de plataforma de ensino",
};

interface IRootLayout extends Readonly<{children: React.ReactNode}> { }

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
