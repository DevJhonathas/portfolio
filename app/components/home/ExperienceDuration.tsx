
"use client";

import { useTranslations } from "next-intl";
import { profile } from "@/app/data/profile";

function calculateExperienceDuration(
  periods: { startDate: string; endDate: string }[]
) {
  let totalMonths = 0;

  for (const period of periods) {
    const [startYear, startMonth, startDay] =
      period.startDate.split("-").map(Number);

    const [endYear, endMonth, endDay] =
      period.endDate.split("-").map(Number);

    const start = new Date(startYear, startMonth - 1, startDay);
    const end = new Date(endYear, endMonth - 1, endDay);

    const invalidDate =
      Number.isNaN(start.getTime()) ||
      Number.isNaN(end.getTime()) ||
      start.getFullYear() !== startYear ||
      start.getMonth() !== startMonth - 1 ||
      start.getDate() !== startDay ||
      end.getFullYear() !== endYear ||
      end.getMonth() !== endMonth - 1 ||
      end.getDate() !== endDay ||
      end < start;

    if (invalidDate) {
      return null;
    }

    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    if (end.getDate() < start.getDate()) {
      months--;
    }

    totalMonths += months;
  }

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
}

export function ExperienceDuration() {
  const t = useTranslations("duration");

  const duration = calculateExperienceDuration(profile.workPeriods);

  if (!duration) {
    return <>{t("invalidPeriods")}</>;
  }

  if (duration.years === 0 && duration.months === 0) {
    return <>{t("lessThanMonth")}</>;
  }

  const result: string[] = [];

  if (duration.years > 0) {
    result.push(t("years", { count: duration.years }));
  }

  if (duration.months > 0) {
    result.push(t("months", { count: duration.months }));
  }

  return <>{result.join(t("joiner"))}</>;
}
