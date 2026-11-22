
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export function ScrollTarget() {
  const pathname = usePathname();
  const locale = useLocale();

  const homePath = `/${locale}`;
  const currentPath = pathname.replace(/\/+$/, "") || "/";

  useEffect(() => {
    if (currentPath !== homePath) return;

    const targetId = sessionStorage.getItem(
      "portfolio-scroll-target"
    );

    if (!targetId) return;

    let frameId: number;
    let attempts = 0;

    function scrollToTarget() {
      const target = document.getElementById(targetId!);

      if (!target) {
        attempts++;

        if (attempts < 60) {
          frameId = requestAnimationFrame(scrollToTarget);
        } else {
          sessionStorage.removeItem("portfolio-scroll-target");
        }

        return;
      }

      sessionStorage.removeItem("portfolio-scroll-target");

      frameId = requestAnimationFrame(() => {
        frameId = requestAnimationFrame(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });
    }

    frameId = requestAnimationFrame(scrollToTarget);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [pathname, currentPath, homePath]);

  return null;
}
