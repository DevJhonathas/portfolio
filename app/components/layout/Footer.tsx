
import { ArrowUp } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { profile } from "@/app/data/profile";
import { ScrollLink } from "./ScrollLink";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: profile.github,
      icon: <SiGithub size={19} />,
      external: true,
    },
    {
      name: "LinkedIn",
      href: profile.linkedin,
      icon: <FaLinkedin size={19} />,
      external: true,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/${profile.whatsapp}`,
      icon: <FaWhatsapp size={19} />,
      external: true,
    },
    {
      name: "E-mail",
      href: `mailto:${profile.email}`,
      icon: <FaEnvelope size={19} />,
      external: false,
    },
    {
      name: "Instagram",
      href: profile.instagram,
      icon: <FaInstagram size={19} />,
      external: true,
    },
  ];

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-semibold">
            portfolio<span className="text-[var(--primary)]">.</span>
          </p>

          <p className="mt-1 text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} — Desenvolvido por {profile.name}.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.name}
              title={item.name}
              className="group flex min-w-[68px] flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-[var(--muted)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--surface-hover)] hover:text-[var(--primary)]"
            >
              {item.icon}

              <span className="text-[11px] font-medium">
                {item.name}
              </span>
            </a>
          ))}

          <ScrollLink
            href="#inicio"
            aria-label="Voltar ao início"
            title="Voltar ao topo"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--surface-hover)] hover:text-[var(--primary)]"
          >
            <ArrowUp size={19} />
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
}
