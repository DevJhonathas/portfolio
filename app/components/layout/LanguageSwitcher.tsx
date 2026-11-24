
"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import Image from 'next/image';


type Locale = "pt" | "en";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("language");

 const nextLocale: Locale = locale.startsWith("pt") ? "en" : "pt";

  const segments = pathname.split("/").filter(Boolean);

  const routeSegments =
    segments[0] === locale ? segments.slice(1) : segments;

  const href =
    routeSegments.length > 0
      ? `/${nextLocale}/${routeSegments.join("/")}/`
      : `/${nextLocale}/`;

  const isEnglish = nextLocale === "en";

    const assetBasePath =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

  const flagSrc = isEnglish
    ? `${assetBasePath}/images/svg/gb.svg`
    : `${assetBasePath}/images/svg/brasil.svg`;


  return (
    <Link
      href={href}
      aria-label={
        isEnglish
          ? t("switchToEnglish")
          : t("switchToPortuguese")
      }
      title={
        isEnglish
          ? t("switchToEnglish")
          : t("switchToPortuguese")
      }
      className="flex h-10 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 text-xs font-semibold tracking-wide text-[var(--foreground)] transition hover:border-[var(--primary)] hover:bg-[var(--surface-hover)] hover:text-[var(--primary)]"
    >
        <span className="inline-flex size-5 shrink-0 overflow-hidden rounded-full ring-1 ring-black/15">
          <Image
            src={flagSrc}
            alt={isEnglish ? "English" : "Português"}
            width={20}
            height={20}
            unoptimized
            className="size-full object-cover"
          />
        </span>

      <span>{nextLocale.toUpperCase()}</span>
    </Link>
  );
}
