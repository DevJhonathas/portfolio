
import { notFound } from "next/navigation";

import {
  hasLocale,
  NextIntlClientProvider,
} from "next-intl";

import {
  getMessages,
  setRequestLocale,
} from "next-intl/server";

import { routing } from "@/i18n/routing";

import { ScrollTarget } from "@/app/components/layout/ScrollTarget";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import Clarity from "@/app/components/Clarity";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <ScrollTarget />
      <Navbar />
      {children}
      <Clarity />
      <Footer />
    </NextIntlClientProvider>
  );
}
