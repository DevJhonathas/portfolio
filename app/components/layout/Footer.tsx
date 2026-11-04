import { ArrowUp } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { profile } from "@/app/data/profile";
import { ScrollLink } from "./ScrollLink";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row">

        <div className="text-center sm:text-left">
          <p className="font-semibold">
            portfolio<span className="text-[var(--primary)]">.</span>
          </p>

          <p className="mt-1 text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} — Desenvolvido por {profile.name}.
          </p>
        </div>

        <div className="flex items-center gap-4">

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--muted)] transition hover:text-[var(--primary)]"
          >
            <SiGithub size={21} color="currentColor" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="text-[var(--muted)] transition hover:text-[var(--primary)]"
          >
            <FaLinkedin size={21} color="currentColor" />
          </a>

          <ScrollLink
            href="#inicio"
            aria-label="Voltar ao início"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] transition hover:bg-[var(--surface-hover)]"
          >
            <ArrowUp size={18} />
          </ScrollLink>

        </div>

      </div>
    </footer>
  );
}