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
      return "Verifique os períodos cadastrados";
    }

    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    if (end.getDate() < start.getDate()) {
      months--;
    }

    totalMonths += months;
  }

  if (totalMonths <= 0) {
    return "Menos de um mês";
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const result = [];

  if (years > 0) {
    result.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  }

  if (months > 0) {
    result.push(`${months} ${months === 1 ? "mês" : "meses"}`);
  }

  return result.join(" e ");
}

export function ExperienceDuration() {
  return <>{calculateExperienceDuration(profile.workPeriods)}</>;
}