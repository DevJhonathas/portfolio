// import { UserRound } from "lucide-react";
import { profile } from "@/app/data/profile";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-32 py-8">
      <div className="mx-auto max-w-6xl px-5">

        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Introdução
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Sobre mim
          </h2>
        </div>

          <div className="w-full">
            <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9">
              <h3 className="text-xl font-semibold">
                Um pouco sobre minha trajetória
              </h3>

              <p className="whitespace-pre-line text-base leading-8 text-[var(--muted)]">
                {profile.about}
              </p>
            </div>
          </div>
        </div>

    </section>
  );
}