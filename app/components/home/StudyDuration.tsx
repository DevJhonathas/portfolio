
"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { profile } from "@/app/data/profile";

export function StudyDuration() {
  const t = useTranslations("duration");

  const [duration, setDuration] = useState(() =>
    t("calculating")
  );

  useEffect(() => {
    const updateDuration = () => {
      const [year, month, day] = profile.studyStartDate
        .split("-")
        .map(Number);

      if (!year || !month || !day) {
        setDuration(t("invalidStartDate"));
        return;
      }

      const start = new Date(year, month - 1, day);
      const now = new Date();

      if (
        Number.isNaN(start.getTime()) ||
        start.getFullYear() !== year ||
        start.getMonth() !== month - 1 ||
        start.getDate() !== day ||
        start > now
      ) {
        setDuration(t("invalidStartDate"));
        return;
      }

      let totalMonths =
        (now.getFullYear() - start.getFullYear()) * 12 +
        (now.getMonth() - start.getMonth());

      if (now.getDate() < start.getDate()) {
        totalMonths--;
      }

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      if (years === 0 && months === 0) {
        setDuration(t("lessThanMonth"));
        return;
      }

      const result: string[] = [];

      if (years > 0) {
        result.push(t("years", { count: years }));
      }

      if (months > 0) {
        result.push(t("months", { count: months }));
      }

      setDuration(result.join(t("joiner")));
    };

    updateDuration();

    const interval = window.setInterval(
      updateDuration,
      1000 * 60 * 60 * 24
    );

    return () => window.clearInterval(interval);
  }, [t]);

  return <>{duration}</>;
}
