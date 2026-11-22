
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

export function About() {
  const t = useTranslations("about");

  const foreground = (chunks: ReactNode) => (
    <strong className="font-semibold text-[var(--foreground)]">
      {chunks}
    </strong>
  );

  const accent = (chunks: ReactNode) => (
    <strong className="font-semibold text-[var(--primary)]">
      {chunks}
    </strong>
  );

  return (
    <section id="sobre" className="scroll-mt-32 py-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="w-full">
          <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9">
            <h3 className="text-xl font-semibold">
              {t("cardTitle")}
            </h3>

            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--muted)]">
              <p>
                {t.rich("paragraphs.introduction", {
                  foreground,
                })}
              </p>

              <p>
                {t.rich("paragraphs.professional", {
                  foreground,
                  accent,
                })}
              </p>

              <p>
                {t.rich("paragraphs.development", {
                  foreground,
                  accent,
                })}
              </p>

              <p>
                {t.rich("paragraphs.goals", {
                  accent,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
