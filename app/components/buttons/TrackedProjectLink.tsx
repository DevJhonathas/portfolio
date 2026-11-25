"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { trackClarityEvent } from "@/app/lib/clarity";

type Props = {
  href: string;
  eventName: string;
  className?: string;
  children: ReactNode;
};

export default function TrackedProjectLink({
  href,
  eventName,
  className,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackClarityEvent(eventName)}
    >
      {children}
    </Link>
  );
}