import type { Metadata } from "next";
import { Providers } from "./components/layout/Providers";
import "./globals.css";
import { ScrollTarget } from "./components/layout/ScrollTarget";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

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
        <Providers>
          <ScrollTarget />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}