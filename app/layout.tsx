
import type { Metadata } from "next";

import { Providers } from "./components/layout/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio | Desenvolvedor",
  description:
    "Portfólio pessoal com meus projetos, tecnologias e trajetória na programação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
