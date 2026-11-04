"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import type {
  ComponentProps,
  MouseEvent,
  MouseEventHandler,
} from "react";

interface ScrollLinkProps
  extends Omit<ComponentProps<typeof Link>, "href" | "onClick"> {
  href: `#${string}` | `/#${string}`;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function ScrollLink({
  href,
  onClick,
  ...props
}: ScrollLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const targetId = decodeURIComponent(
      href.startsWith("/")
        ? href.substring(2)
        : href.substring(1)
    );

    if (pathname === "/") {
      const target = document.getElementById(targetId);

      if (target) {
        window.history.replaceState(
          window.history.state,
          "",
          window.location.pathname + window.location.search
        );

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      sessionStorage.setItem("portfolio-scroll-target", targetId);

      router.push("/", { scroll: false });
    }

    onClick?.(event);
  }

  return (
    <Link
      href={href}
      {...props}
      onClick={handleClick}
    />
  );
}