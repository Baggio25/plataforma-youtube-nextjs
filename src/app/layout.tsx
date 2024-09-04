import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodarseBaggio",
  description: "Desenvolvimento de plataforma de ensino",
};

interface IRootLayout extends Readonly<{children: React.ReactNode}> { }

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
