
"use client";

import { usePathname } from "next/navigation";
import {
  NextIntlClientProvider,
  useLocale,
  useTranslations,
} from "next-intl";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  SearchX,
} from "lucide-react";

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

import ptMessages from "@/messages/pt.json";
import enMessages from "@/messages/en.json";

type Locale = "pt" | "en";

const messages = {
  pt: ptMessages,
  en: enMessages,
};

export default function NotFound() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const localeSegment = segments.find(
    (segment) => segment === "pt" || segment === "en"
  );

  const locale: Locale = localeSegment === "en" ? "en" : "pt";

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages[locale]}
    >
      <Navbar />
      <NotFoundContent />
      <Footer />
    </NextIntlClientProvider>
  );
}

function NotFoundContent() {
  const locale = useLocale();
  const t = useTranslations("notFound");

  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] opacity-[0.06] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-2xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)] shadow-lg">
          <SearchX size={26} strokeWidth={1.7} />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
          {t("eyebrow")}
        </p>

        <h1 className="mt-4 text-[clamp(6rem,18vw,11rem)] font-black leading-none tracking-tighter text-[var(--foreground)]">
          404<span className="text-[var(--primary)]">.</span>
        </h1>

        <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
          {t("heading")}
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">
          {t("description")}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`/${locale}/`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:opacity-90 sm:w-auto"
          >
            <ArrowLeft size={17} />
            {t("backHome")}
          </Link>

          <Link
            href={`/${locale}/#projetos`}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto"
          >
            {t("exploreProjects")}

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <p className="mt-12 text-xs text-[var(--muted)]">
          {t("error")}
        </p>
      </div>
    </main>
  );
}
